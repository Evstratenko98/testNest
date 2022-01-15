import { IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  phone: number;
  password: string;
}
