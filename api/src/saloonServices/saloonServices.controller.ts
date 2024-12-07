import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CreateCategoryDto } from './dto/body/createCategory.dto';
import { CreateServiceDto } from './dto/body/createService.dto';
import { CategoryDto } from './dto/expose/category.dto';
import { ServiceDto } from './dto/expose/service.dto';
import { SaloonServicesService } from './saloonServices.service';

@UseGuards(JwtAuthGuard)
@Controller('services')
export class SaloonServicesController {
  constructor(private saloonServicesService: SaloonServicesService) {}

  @Get()
  @Serialize(ServiceDto)
  async list() {
    try {
      return await this.saloonServicesService.listByServices();
    } catch (e) {
      console.log(e);
    }
  }

  @Get('/category')
  @Serialize(CategoryDto)
  async listByCategory() {
    try {
      return await this.saloonServicesService.listByCategories();
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  @Serialize(ServiceDto)
  async addNewService(@Body() body: CreateServiceDto) {
    try {
      return await this.saloonServicesService.createService(body);
    } catch (e) {
      console.log(e);
    }
  }

  @Post()
  @Serialize(CategoryDto)
  async addNewCategory(@Body() body: CreateCategoryDto) {
    try {
      return await this.saloonServicesService.createCategory(body);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete('/:id')
  @Serialize(ServiceDto)
  async deleteService(@Param('id') id: number) {
    try {
      return await this.saloonServicesService.deleteService(id);
    } catch (e) {
      console.log(e);
    }
  }

  @Delete('/category/:id')
  @Serialize(CategoryDto)
  async deleteCategory(@Param('id') id: number) {
    try {
      return await this.saloonServicesService.deleteCategory(id);
    } catch (e) {
      console.log(e);
    }
  }
}
