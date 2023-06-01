import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ReleaseFormModule } from './release-form/release-form.module';

@Module({
  imports: [CatsModule, ReleaseFormModule]
})
export class AppModule { }
