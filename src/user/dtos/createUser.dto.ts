import { IsEmail, IsOptional, IsString, MaxLength, maxLength, MinLength } from "class-validator";
import { CreateProfileDto } from "src/profile/dtos/CreateProfile.dto";

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

    @IsOptional()
    profile: CreateProfileDto | null;
}
