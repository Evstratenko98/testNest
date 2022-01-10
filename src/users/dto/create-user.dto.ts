import { IsDefined } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  phone: string;
  password: string;
}
