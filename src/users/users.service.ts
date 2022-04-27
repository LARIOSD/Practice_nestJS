import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import userData from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly userRepository : Repository<User>;

  public async create(userData: CreateUserDto): Promise<User> {
    const { password, ...user } :CreateUserDto = {...userData}; 
    const encrytedPassword : string = await bcrypt.hash(password,10);
    const userInsert : CreateUserDto = { password: encrytedPassword, ...user }

    const userDataBase : userData =  await this.userRepository.save(userInsert);
    return userDataBase;
  }

  public async findAll() : Promise<User[]> {
    const userAll : userData[] = await this.userRepository.find(); 
    return userAll;
  }

  public async findOne(id: number) : Promise<User> {
    const userOne : userData = await this.userRepository.findOne(id);
    return userOne;
  }

  public async update(id: number, userData: UpdateUserDto) : Promise<User> {
    await this.userRepository.update(id, userData);
    const userUpdate :userData = await this.findOne(id);
    return userUpdate;
  }

  public async remove(id: number)  : Promise<number[]> {
    await this.userRepository.delete(id);
    const idsDelete : number[] = [].concat(id)
    return idsDelete;
  }
}
