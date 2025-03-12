import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dtos/CreateProfile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>
    ) { }

    async createProfile(body: CreateProfileDto) {
        let  newProfile = this.profileRepository.create(body);
        newProfile = await this.profileRepository.save(newProfile);
        return newProfile;
    }
}
