import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    getUsers() {
        return "All Users";
    }
    
    @Post('signup')
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

}