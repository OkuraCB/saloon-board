import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SaloonController } from './saloon.controller';
import { SaloonService } from './saloon.service';

@Module({
  controllers: [SaloonController],
  providers: [SaloonService, PrismaService],
  exports: [SaloonService],
})
export class SaloonModule {}
