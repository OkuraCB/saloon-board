import { Expose } from 'class-transformer';
import { ServiceDto } from 'src/saloonServices/dto/expose/service.dto';

export class PartnerDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  services: ServiceDto[];
}
