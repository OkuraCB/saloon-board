import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/body/createCategory.dto';
import { CreateServiceDto } from './dto/body/createService.dto';

@Injectable()
export class SaloonServicesService {
  constructor(private prisma: PrismaService) {}

  async listByServices() {
    const services = await this.prisma.services.findMany({
      include: { category: true },
    });

    if (!services) return [];

    return services;
  }

  async listByCategories() {
    const categories = await this.prisma.serviceCategory.findMany({
      include: { services: true },
    });

    if (!categories) return [];

    return categories;
  }

  async createCategory(body: CreateCategoryDto) {
    const newCategory = await this.prisma.serviceCategory.create({
      data: body,
    });

    if (!newCategory) throw new Error('erro');

    return newCategory;
  }

  async createService(body: CreateServiceDto) {
    const newService = await this.prisma.services.create({
      data: {
        name: body.name,
        time: body.time,
        price: body.price,
        category: { connect: { id: body.categoryId } },
      },
    });

    if (!newService) throw new Error('erro');

    return newService;
  }

  async deleteCategory(id: number) {
    const deleted = await this.prisma.serviceCategory.delete({ where: { id } });

    if (!deleted) throw new Error('erro');

    return deleted;
  }

  async deleteService(id: number) {
    const deleted = await this.prisma.services.delete({ where: { id } });

    if (!deleted) throw new Error('erro');

    return deleted;
  }
}
