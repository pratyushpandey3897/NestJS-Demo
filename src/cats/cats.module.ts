import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { 
    // constructor(private catsService: CatsService) {} // Module class can inject providers as well
 }
