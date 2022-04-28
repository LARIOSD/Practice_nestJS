import { Connection } from 'typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './api/users/users.module';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { ApiModule } from './api/api.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
  TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  UsersModule,
  ApiModule,
  ],
  controllers: [],
})
export class AppModule {
  constructor(private connection : Connection){}
}
