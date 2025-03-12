import { IsEmail, IsNumber, IsOptional, IsString, Max, MaxLength, MinLength } from "class-validator";

export class createJobDto {

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    salary: number;
    
    @IsString()
    @MaxLength(100)
    location: string;
    
    @IsEmail()
    @MaxLength(50)
    @MinLength(5)
    email: string;
    
    @IsString()
    @MaxLength(100)
    @IsOptional()
    status: string;
}