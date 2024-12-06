import { Expose } from 'class-transformer';
import { SaloonDto } from 'src/saloon/dto/expose/saloon.dto';
import { ServiceDto } from 'src/saloonServices/dto/expose/service.dto';

export class ScheduleDto {
  @Expose()
  id: number;

  @Expose()
  active: boolean;

  @Expose()
  authorName: string;

  @Expose()
  authorNumber: string;

  @Expose()
  startTime: Date;

  @Expose()
  endTime: Date;

  @Expose()
  pending: boolean;

  @Expose()
  service: ServiceDto;

  @Expose()
  saloon: SaloonDto;
}
