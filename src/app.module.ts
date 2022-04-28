import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './api/users/users.module';
// import { ConfigModule } from './config/config.module';
import { Connection } from 'typeorm';
@Module({
  imports: [UsersModule,
  TypeOrmModule.forRoot({
    type        : 'mysql',
    host        : 'localhost',
    port        : 3306,
    username    : 'root',
    password    : 'd4t4b4s3',
    database    : 'school',
    entities    : ['dist/**/*.entity{.ts,.js}'],
    synchronize : true,
  }),
//  ConfigModule
  ],
  controllers : [AppController],
  providers   : [AppService],
})
export class AppModule {
  constructor(private connection : Connection){}
}
