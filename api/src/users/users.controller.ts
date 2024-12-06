import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PartnerDto } from './dto/expose/partner.dto';
import { UserDto } from './dto/expose/user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/all/:id')
  @Serialize(PartnerDto)
  async listAllBySaloon(@Param('id') id: number) {
    try {
      return await this.usersService.list(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/:email')
  @Serialize(UserDto)
  async getUserByEmail(@Param('email') email: string) {
    try {
      return await this.usersService.findByEmail(email);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete('/:id')
  @Serialize(UserDto)
  async deleteUser(@Param('id') id: number) {
    try {
      return await this.usersService.delete(id);
    } catch (e) {
      console.log(e);
    }
  }
}
