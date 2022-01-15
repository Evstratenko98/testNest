import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { pipe, Observable, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  public create(createUserDto: CreateUserDto): string {
    return `${createUserDto.phone} ${createUserDto.password}`;
  }

  findAll(): Observable<AxiosResponse> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res) => res.data));
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
