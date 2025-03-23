import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from 'src/profile/profile.entity';
<<<<<<< Updated upstream
=======
import { User } from './user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
>>>>>>> Stashed changes

@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
<<<<<<< Updated upstream
    private jobsRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
    ) {}


    createUser() {
        // create a Prfile & save 


        // set the profile id to the user


        // save the user Object
        return 'User Created';
=======
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private ProfileRepository: Repository<Profile>,
    ) {}


    public async createUser(user: CreateUserDto) {
        user.profile ? user.profile : {}
        // console.log(user);
        // create Profile
        let newProfile = this.ProfileRepository.create(user.profile);
        newProfile = await this.ProfileRepository.save(newProfile);
        // console.log(newProfile);


        // create User
        let newUser = this.userRepository.create(user);

        newUser.Profile = newProfile;

        newUser = await this.userRepository.save(newUser);

        return newUser;
>>>>>>> Stashed changes
    }
}
