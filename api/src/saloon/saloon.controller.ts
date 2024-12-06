import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CloseDayDto } from './dto/body/closeDay.dto';
import { CreateSaloonDto } from './dto/body/createSaloon.dto';
import { UpdateSaloonDto } from './dto/body/updateSaloon.dto';
import { SaloonDto } from './dto/expose/saloon.dto';
import { SaloonService } from './saloon.service';

@UseGuards(JwtAuthGuard)
@Controller('saloon')
export class SaloonController {
  constructor(private saloonService: SaloonService) {}

  @Get()
  @Serialize(SaloonDto)
  async listAll() {
    try {
      return await this.saloonService.list();
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  @Serialize(SaloonDto)
  async addNewSaloon(@Body() body: CreateSaloonDto) {
    try {
      return await this.saloonService.create(body);
    } catch (e) {
      console.log(e);
    }
  }

  @Patch('/:id')
  @Serialize(SaloonDto)
  async updateSaloon(@Param('id') id: number, @Body() body: UpdateSaloonDto) {
    try {
      return await this.saloonService.update(id, body);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete('/:id')
  @Serialize(SaloonDto)
  async deleteUser(@Param('id') id: number) {
    try {
      return await this.saloonService.delete(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Post('/close')
  @Serialize(SaloonDto)
  async closeDay(@Param('id') id: number, @Body() body: CloseDayDto) {
    try {
      return await this.saloonService.closeDay(id, body.closedAt);
    } catch (e) {
      console.log(e);
    }
  }
}
