import { Expose, Type } from 'class-transformer';
import { ServiceDto } from './service.dto';

export class CategoryDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  @Type(() => ServiceDto)
  services: ServiceDto[];
}
