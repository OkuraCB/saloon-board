import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Saloon ID should not be empty' })
  @IsNumber()
  @IsOptional()
  saloonId: number;

  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password should not be empty' })
  @IsString()
  password: string;

  @IsOptional()
  @IsArray()
  services: Array<number>;
}
