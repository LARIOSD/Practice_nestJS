/* eslint-disable @typescript-eslint/no-explicit-any */
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import userData from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseService } from 'src/response/response.service';
import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {

  @InjectRepository(User)
  private readonly userRepository : Repository<User>;

  constructor(
    private reponseService : ResponseService,
  ){}

  public async create(userData: CreateUserDto): Promise<any> {
    try {
      const { password, ...user } :CreateUserDto = {...userData}; 
      const encryptedPassword : string = await bcrypt.hash(password,10);
      const newUser : CreateUserDto = { password: encryptedPassword, ...user }
      
      const userInsert : userData =  await this.userRepository.save(newUser);
      return userInsert;
      
    } catch (error) {
      const {code,sqlMessage} = error
      const response = {status: 500, code, message: sqlMessage}
      throw response;
      
    }
  }
  
  public async findAll() : Promise<User[]> {
    const userRead : userData[] = await this.userRepository.find(); 
    return userRead;
  }

  public async findOne(id: number) : Promise<User> {
    const userReadOne : userData = await this.userRepository.findOne(id);
    return userReadOne;
  }

  public async update(id: number, userData: UpdateUserDto) : Promise<any> {
    try {
      const { password, ...user } : UpdateUserDto = {...userData};
      const userDB : userData = await this.findOne(id);
      if (!userDB || !bcrypt.compareSync(password, userDB.password)) {
        throw new NotFoundException({ 
          status  : HttpStatus.UNAUTHORIZED,
          message : 'Incorrect username or password', 
          code    : 'INVALID_CREDENTIALS'
        });
      }
      
      const newPasword : string = user.newPassword ? bcrypt.hashSync(user.newPassword, 10) : userDB.password;
      const newUser: UpdateUserDto = {password: newPasword, ...user}  
      await this.userRepository.update(id, newUser);
      
      const userUpdate :userData = await this.findOne(id);
      return userUpdate;
    } catch (error) {
      this.reponseService.responseError(error);
      let response: any;
      if(error.response){
        response = {...error.response}
      }else{
        const { code, sqlMessage} = error
        response = {status: 500, code, message: sqlMessage}
      }
      
      throw response;
    }
  }

  public async remove(id: number)  : Promise<number[]> {
    await this.userRepository.delete(id);
    const idsDelete : number[] = [].concat(id)
    return idsDelete;
  }
}
