import { ServiceCategory } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/expose/user.dto';

export class ServiceDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  time: number;

  @Expose()
  price: number;

  @Expose()
  category: ServiceCategory;

  @Expose()
  @Type(() => UserDto)
  partners: UserDto[];
}
