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

    const encryptedPassword : string = await bcrypt.hash(password,10);
    const newUser : CreateUserDto = { password: encryptedPassword, ...user }

    const userInsert : userData =  await this.userRepository.save(newUser);
    return userInsert;
  }

  public async findAll() : Promise<User[]> {
    const userRead : userData[] = await this.userRepository.find(); 
    return userRead;
  }

  public async findOne(id: number) : Promise<User> {
    const userReadOne : userData = await this.userRepository.findOne(id);
    return userReadOne;
  }

  public async update(id: number, userData: UpdateUserDto) : Promise<User> {
    const { password, ...user } : UpdateUserDto = {...userData};
    
    const userDB : userData = await this.findOne(id);
    if (!userDB || bcrypt.compareSync(password, userDB.password)) {
      console.log('Error');
    }
    console.log(bcrypt.compareSync(password, userDB.password));
    
    const newPasword : string = userDB.newPassword ? await bcrypt.hash(userDB.newPassword, 10) : userDB.password;
    const newUser: UpdateUserDto = {password: newPasword, ...user}  
    await this.userRepository.update(id, newUser);
    
    const userUpdate :userData = await this.findOne(id);
    return userUpdate;
  }

  public async remove(id: number)  : Promise<number[]> {
    await this.userRepository.delete(id);
    const idsDelete : number[] = [].concat(id)
    return idsDelete;
  }
}
