import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from 'src/users/dto/body/createUser.dto';
import { UserDto } from 'src/users/dto/expose/user.dto';
import { LoginDto } from './dto/body/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validatePassword(pss: string, password: string) {
    return await bcrypt.compare(pss, password);
  }

  async login(user: LoginDto) {
    const { email, password } = user;

    const find = await this.prisma.user.findUnique({ where: { email } });

    const passCheck = await this.validatePassword(password, find.password);

    if (!passCheck || !find) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const payload = {
      sub: find.id,
      name: find.name,
      email: find.email,
      role: find.role,
      saloonId: find.saloonId,
    };
    const accessToken = await this.jwtService.sign(payload);

    const newToken = await this.prisma.token.create({
      data: { token: accessToken, userId: payload.sub },
    });

    if (!newToken) throw new Error('error');

    return { access_token: accessToken };
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user && this.validatePassword(password, user.password))
      return user as UserDto;

    return null;
  }

  async create(user: CreateUserDto) {
    const { name, email, password, saloonId } = user;

    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

    const newUser = {
      name: name,
      email: email,
      password: hashed,
    };

    return await this.prisma.user.create({
      data: { ...newUser, saloon: { connect: { id: saloonId } } },
    });
  }
}
