import {
    Controller,
    Get,
    Param,
    Post,
    Body,
} from '@nestjs/common';
import { BookmakerService } from './bookmaker.service';
import { Bookmaker as BookmakerModel } from '@prisma/client';
import { BookmakerRequestDto } from './interfaces/bookmakerRequestDto.interface';

@Controller()
export class BookmakerController {
    constructor(
        private readonly bookmakerService: BookmakerService,
    ) {}

    @Get('bookmakers')
    async getPostById(@Param('id') id: string): Promise<BookmakerModel[]> {
        return this.bookmakerService.bookmakers({});
    }

    @Post('/bookmaker/create')
    async getFilteredPosts(
        @Body() requestData: BookmakerRequestDto
    ): Promise<BookmakerModel> {
        return this.bookmakerService.createBookmaker({
            name: requestData.name,
            ratingCount: Number(requestData.ratingCount),
            ios: requestData.ios,
            android: requestData.android,
        });
    }
}
