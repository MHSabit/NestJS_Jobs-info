import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from 'src/profile/profile.entity';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private jobsRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    ) {}


    createUser() {
        // create a Prfile & save 


        // set the profile id to the user


        // save the user Object
        return 'User Created';
    }
}
