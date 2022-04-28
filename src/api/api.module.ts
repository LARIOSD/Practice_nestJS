import { Module } from '@nestjs/common';
import { ResponseModule } from 'src/response/response.module';
import { UsersModule } from './users/users.module';

@Module({
    imports     : [UsersModule, ResponseModule],
    controllers : [],
})

export class ApiModule {
}
