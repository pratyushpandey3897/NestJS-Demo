import { Controller, Get, Req, Post, HttpCode, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from '../create-cat.dto';
import { Cat } from 'src/cat/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return this.catsService.findAll();
    }

    //     @Get()
    //   findAll(@Res() res: Response) { // library specific approach
    //      res.status(HttpStatus.OK).json([]);
    //   }

    //     @Get()
    // findAll(): Observable<any[]> {
    //   return of([]);
    // }

    @Get(':id')
    findOne(@Param() params: any): string {
        return `This returns cat with #${params.id} cat`;
    }

    @Post()
    @HttpCode(204)
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get('ab*cd')
    findAllWildcard() {
        return 'This route uses a wildcard';
    }


}