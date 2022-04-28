import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { ResponseModule } from 'src/response/response.module';
import { ResponseService } from 'src/response/response.service';
@Module({
  imports     : [TypeOrmModule.forFeature([User]), ResponseModule],
  controllers : [UsersController],
  providers   : [UsersService, ResponseService],
})
export class UsersModule {}
