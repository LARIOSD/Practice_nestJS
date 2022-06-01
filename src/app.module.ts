import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './api/users/users.module';
import { getEnvPath } from './common/helper/env.helper';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ErrorsInterceptor } from './common/interceptors/exeption.interceptor';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    UsersModule,
    ApiModule,
    MorganModule,
  ],
  controllers : [],
  providers   : [
    {
      provide  : APP_INTERCEPTOR,
      useClass : MorganInterceptor('dev'),
    },
    {
      provide  : APP_INTERCEPTOR,
      useClass : ErrorsInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
