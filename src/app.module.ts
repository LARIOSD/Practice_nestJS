import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersModule } from './api/users/users.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';


const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
console.log('ruta', envFilePath);
console.log(TypeOrmConfigService);

@Module({
  imports: [
  TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  UsersModule,
  // TypeOrmModule.forRoot({
  //   type        : 'mysql',
  //   host        : 'localhost',
  //   port        : 3306,
  //   username    : 'root',
  //   password    : 'meinsm',
  //   database    : 'school',
  //   entities    : ['dist/**/*.entity{.ts,.js}'],
  //   synchronize : true,
  // }),
  
  ],
  controllers : [AppController],
  providers   : [AppService],
})
export class AppModule {
  constructor(private connection : Connection){}
}
