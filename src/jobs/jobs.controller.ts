import { Controller, Get, Post, Delete, Patch, Query, Param, ParseIntPipe, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { createJobDto } from './dtos/createJob.dto';
import { UpdateJobDto } from './dtos/updateJob.dto';

@Controller('jobs')
export class JobsController {
    constructor(private JobsService: JobsService) {}

    @Get()
    getJobs() {
        return this.JobsService.getJobs()
    }

    @Get(':id')
    getJobByID(@Param('id', ParseIntPipe ) id) {
        return this.JobsService.getJobByID(id)
    }


    @Post()
    createJob(@Body() job: createJobDto) {
        return this.JobsService.createJob(job)
    }


    @Patch(':id')
    updateJob(@Param('id', ParseIntPipe) id, @Body() job: UpdateJobDto) {
        return this.JobsService.updateJob(id, job)

    }

}
