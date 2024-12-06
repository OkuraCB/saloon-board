import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Time should not be empty' })
  @IsNumber()
  time: number;

  @IsNotEmpty({ message: 'Price should not be empty' })
  price: number;

  @IsNotEmpty({ message: 'Category should not be empty' })
  @IsNumber()
  categoryId: number;
}
