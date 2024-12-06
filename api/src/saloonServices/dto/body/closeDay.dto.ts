import { IsDate, IsNotEmpty } from 'class-validator';

export class CloseDayDto {
  @IsNotEmpty({ message: 'Closed day should not be empty' })
  @IsDate()
  closedAt: Date;
}
