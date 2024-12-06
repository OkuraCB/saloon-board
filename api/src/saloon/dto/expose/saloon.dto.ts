import { ClosedDays } from '@prisma/client';
import { Expose, Type } from 'class-transformer';
import { UserDto } from 'src/users/dto/expose/user.dto';

export class SaloonDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  workDays: number;

  @Expose()
  opening: number;

  @Expose()
  closing: number;

  @Expose()
  closedDays: ClosedDays[];

  @Expose()
  @Type(() => UserDto)
  partners: UserDto[];
}
