import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { SaloonModule } from './saloon/saloon.module';
import { SaloonServicesModule } from './saloonServices/saloonServices.module';
import { ScheduleModule } from './scheduled/schedule.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    SaloonModule,
    SaloonServicesModule,
    ScheduleModule,
  ],
  controllers: [],
  providers: [
    { provide: APP_PIPE, useValue: new ValidationPipe({ transform: true }) },
  ],
})
export class AppModule {}
