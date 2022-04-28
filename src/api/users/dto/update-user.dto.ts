import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, MinLength, MaxLength} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @MinLength(8)
    @MaxLength(25)
    newPassword: string;
}
