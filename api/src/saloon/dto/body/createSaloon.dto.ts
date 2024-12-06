import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSaloonDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  workDays: number;

  @IsNotEmpty({ message: 'Opening hour should not be empty' })
  @IsNumber()
  opening: number;

  @IsNotEmpty({ message: 'Closing hour should not be empty' })
  @IsNumber()
  closing: number;
}
