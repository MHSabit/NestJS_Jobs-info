import { PartialType } from '@nestjs/mapped-types';
import { createJobDto } from './createJob.dto';

export class UpdateJobDto extends PartialType(createJobDto) {}