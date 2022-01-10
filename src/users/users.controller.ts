import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('user-get/:id')
  getUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('user-getAll')
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post('user-create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put('user-update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('user-delete/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
