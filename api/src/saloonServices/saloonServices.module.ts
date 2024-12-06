import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SaloonServicesController } from './saloonServices.controller';
import { SaloonServicesService } from './saloonServices.service';

@Module({
  controllers: [SaloonServicesController],
  providers: [SaloonServicesService, PrismaService],
  exports: [SaloonServicesService],
})
export class SaloonServicesModule {}
