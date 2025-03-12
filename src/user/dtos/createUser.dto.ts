import { IsEmail, IsString, MaxLength, maxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    userName: string;
    
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password: string;
    
    @IsString()
    @IsEmail()
    email: string;
}
