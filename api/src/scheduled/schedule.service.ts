import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async listAll(id: number) {
    const scheduled = await this.prisma.scheduled.findMany({
      where: { saloonId: id },
      include: { service: true },
    });

    if (!scheduled) return [];

    return scheduled;
  }

  async listAllPending(id: number) {
    const scheduled = await this.prisma.scheduled.findMany({
      where: { saloonId: id, pending: true },
      include: { service: true },
    });

    if (!scheduled) return [];

    return scheduled;
  }

  async listAllNext(id: number) {
    const now = new Date();

    const scheduled = await this.prisma.scheduled.findMany({
      where: { saloonId: id, pending: false, startTime: { gte: now } },
      include: { service: true },
    });

    if (!scheduled) return [];

    return scheduled;
  }

  async rejectSchedule(id: number) {
    const rejected = await this.prisma.scheduled.delete({ where: { id } });

    if (!rejected) throw new Error('erro');

    return rejected;
  }
}
