import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(25)
    public userName!: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(25)
    public lastName!: string;

    @IsEmail()
    @IsNotEmpty()
    public emailAddress!: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(25)
    public password!: string;
}
