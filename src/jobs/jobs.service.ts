import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jobs } from './jobs.entity';
import { createJobDto } from './dtos/createJob.dto';
import { UpdateJobDto } from './dtos/updateJob.dto';

@Injectable()
export class JobsService {
    constructor(
        @InjectRepository(Jobs)
        private jobsRepository: Repository<Jobs>
    ) {}

    async getJobs() {
        return this.jobsRepository.find();
    }

    getJobByID(id){
        return id;
    }

    async createJob(job: createJobDto) {
        let newJob = this.jobsRepository.create(job);
        newJob = await this.jobsRepository.save(newJob);
        return newJob;
    }

    async updateJob(id: number, job: UpdateJobDto) {
        let updatedJob = await this.jobsRepository.update(id, job);
        return updatedJob;
    }
}
