import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';


//This is a provider
@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }
}
