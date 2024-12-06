import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSaloonDto } from './dto/body/createSaloon.dto';
import { UpdateSaloonDto } from './dto/body/updateSaloon.dto';

@Injectable()
export class SaloonService {
  constructor(private prisma: PrismaService) {}

  async list() {
    const saloons = await this.prisma.saloon.findMany({
      include: { closedDays: true },
    });

    if (!saloons) return [];

    return saloons;
  }

  async create(body: CreateSaloonDto) {
    const newSaloon = await this.prisma.saloon.create({ data: body });

    if (!newSaloon) throw new Error('erro');

    return newSaloon;
  }

  async update(id: number, body: UpdateSaloonDto) {
    const { partners, ...data } = body;

    const updatedSaloon = await this.prisma.saloon.update({
      where: { id },
      data: data,
    });

    if (!updatedSaloon) throw new Error('erro');

    let saloonWithPartners = updatedSaloon;
    for (const partner of partners) {
      saloonWithPartners = await this.prisma.saloon.update({
        where: { id },
        data: { partners: { connect: { id: partner } } },
        include: { closedDays: true },
      });
    }

    return saloonWithPartners;
  }

  async delete(id: number) {
    const deleted = await this.prisma.saloon.delete({ where: { id } });

    if (!deleted) throw new Error('erro');

    return deleted;
  }

  async closeDay(id: number, close: Date) {
    const closeDay = await this.prisma.closedDays.create({
      data: { closedAt: close, saloon: { connect: { id } } },
      include: { saloon: true },
    });

    if (!closeDay) throw new Error('erro');

    return closeDay;
  }
}
