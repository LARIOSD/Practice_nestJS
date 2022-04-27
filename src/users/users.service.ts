import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly userRepository : Repository<User>;

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const userInsert =  await this.userRepository.save(createUserDto);
    return userInsert;
  }

  public async findAll() : Promise<User[]> {
    const userAll = await this.userRepository.find(); 
    return userAll;
  }

  public async findOne(id: number) : Promise<User> {
    const userOne = await this.userRepository.findOne(id);
    return userOne;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) : Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    const userUpdate = await this.findOne(id);
    return userUpdate;
  }

  public async remove(id: number | number[])  : Promise<number[]> {
    await this.userRepository.delete(id);
    const idsDelete = [].concat(id)
    return idsDelete;
  }
}
