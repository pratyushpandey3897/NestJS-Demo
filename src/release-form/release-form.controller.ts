import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReleaseFormService } from './release-form.service';
import { CreateReleaseFormDto } from './dto/create-release-form.dto';
import { UpdateReleaseFormDto } from './dto/update-release-form.dto';

@Controller('release')
export class ReleaseFormController {
  constructor(private readonly releaseFormService: ReleaseFormService) { }

  @Post()
  create(@Body() createReleaseFormDto: CreateReleaseFormDto) {
    return this.releaseFormService.create(createReleaseFormDto);
  }

  @Get()
  findAll() {
    return this.releaseFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.releaseFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReleaseFormDto: UpdateReleaseFormDto) {
    return this.releaseFormService.update(+id, updateReleaseFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.releaseFormService.remove(+id);
  }
}
