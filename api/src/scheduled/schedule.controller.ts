import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ScheduleDto } from './dto/expose/schedule.dto';
import { ScheduleService } from './schedule.service';

@UseGuards(JwtAuthGuard)
@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get('/:id')
  @Serialize(ScheduleDto)
  async listAll(@Param('id') id: number) {
    try {
      return await this.scheduleService.listAll(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/pending/:id')
  @Serialize(ScheduleDto)
  async listAllPending(@Param('id') id: number) {
    try {
      return await this.scheduleService.listAllPending(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/next/:id')
  @Serialize(ScheduleDto)
  async listAllNext(@Param('id') id: number) {
    try {
      return await this.scheduleService.listAllNext(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete('/:id')
  @Serialize(ScheduleDto)
  async rejectSchedule(@Param('id') id: number) {
    try {
      return await this.scheduleService.rejectSchedule(id);
    } catch (e) {
      console.log(e);
    }
  }
}
