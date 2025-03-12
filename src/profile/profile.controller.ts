import { Controller, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/CreateProfile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Post()
    createProfile(@Body() body : CreateProfileDto) {
        return this.profileService.createProfile(body);
    }
}
