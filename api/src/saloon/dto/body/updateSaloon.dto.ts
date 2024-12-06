import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSaloonDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  workDays: number;

  @IsOptional()
  @IsNumber()
  opening: number;

  @IsOptional()
  @IsNumber()
  closing: number;

  @IsOptional()
  partners: number[];
}
