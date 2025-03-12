import { IsOptional } from "class-validator";

export class CreateProfileDto {
    @IsOptional()
    FirstName: string;
    
    @IsOptional()
    LastName: string;
    
    @IsOptional()
    Gender: string;

    @IsOptional()
    DateOfBirth: Date;

    @IsOptional()
    Address: string;
    
    @IsOptional()
    Mobile: string;

    @IsOptional()
    ProfilePic: string;
}