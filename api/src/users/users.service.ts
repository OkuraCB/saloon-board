import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserNotFoundError } from './errors/notFound.error';
import { UserNotDeleted } from './errors/userNotDeleted';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async list(id: number) {
    const partners = await this.prisma.user.findMany({
      where: { saloon: { id: id } },
      include: { services: true },
    });

    if (!partners) return [];

    return partners;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { services: true },
    });

    if (!user) throw new UserNotFoundError();

    return user;
  }

  async delete(id: number) {
    const deleted = await this.prisma.user.delete({ where: { id } });

    if (!deleted) throw new UserNotDeleted();

    return deleted;
  }
}
