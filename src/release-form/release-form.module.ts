import { Module } from '@nestjs/common';
import { ReleaseFormService } from './release-form.service';
import { ReleaseFormController } from './release-form.controller';

@Module({
  controllers: [ReleaseFormController],
  providers: [ReleaseFormService]
})
export class ReleaseFormModule {}
