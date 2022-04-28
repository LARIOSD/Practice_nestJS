import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type             : 'mysql',
      host             : this.config.get<string>('DATABASE_HOST'),
      port             : this.config.get<number>('MYSQL_LOCAL_PORT'),
      username         : this.config.get<string>('MYSQL_USERNAME'),
      password         : this.config.get<string>('MYSQL_ROOT_PASSWORD'),
      database         : this.config.get<string>('MYSQL_DATABASE'),
      entities         : ['dist/**/*.entity.{ts,js}'],
      autoLoadEntities : true,
      synchronize      : true, //never use TRUE in production
    };
  }
}
