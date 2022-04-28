/* eslint-disable @typescript-eslint/no-explicit-any */
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

  @Post()
  public create(@Body() body: CreateUserDto) : Promise<any> {
    return this.usersService.create(body);
  }

  @Get()
  public findAll() : Promise<CreateUserDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number) : Promise<CreateUserDto> {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  public update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) : Promise<any> {
    return this.usersService.update(+id, updateUserDto);
  }
  
  @Delete(':id')
  public remove(@Param('id') id: number) : Promise<number[]> {
    return this.usersService.remove(+id);
  }

}
