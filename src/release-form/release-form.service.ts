import { Injectable } from '@nestjs/common';
import { UpdateReleaseFormDto } from './dto/update-release-form.dto';
import { CreateReleaseFormDto } from './dto/create-release-form.dto';

@Injectable()
export class ReleaseFormService {

  private readonly releaseNt: CreateReleaseFormDto[] = [];

  create(createReleaseFormDto: CreateReleaseFormDto) {
    this.releaseNt.push(createReleaseFormDto);
    return 'This action adds a new releaseForm';
  }

  findAll() {
    return this.releaseNt;
  }

  findOne(id: number) {
    return `This action returns a #${id} releaseForm`;
  }

  update(id: number, updateReleaseFormDto: UpdateReleaseFormDto) {
    return `This action updates a #${id} releaseForm`;
  }

  remove(id: number) {
    return `This action removes a #${id} releaseForm`;
  }
}
