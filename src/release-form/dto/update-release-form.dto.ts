import { PartialType } from '@nestjs/mapped-types';
import { CreateReleaseFormDto } from './create-release-form.dto';

export class UpdateReleaseFormDto extends PartialType(CreateReleaseFormDto) {}
