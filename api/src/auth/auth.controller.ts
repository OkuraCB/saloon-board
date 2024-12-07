import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SaloonServicesService } from 'src/saloonServices/saloonServices.service';
import { CreateUserDto } from 'src/users/dto/body/createUser.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/body/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private saloonServicesService: SaloonServicesService,
  ) {}

  @Post('/signup')
  async signUp(@Body() data: CreateUserDto) {
    try {
      const newUser = await this.authService.create(data);
      await this.saloonServicesService.addServicesToUser(
        newUser.id,
        data.services,
      );
    } catch (e) {}
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Body() user: LoginDto) {
    return await this.authService.login(user);
  }
}
