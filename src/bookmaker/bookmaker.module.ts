import { Module } from '@nestjs/common';
import { BookmakerController } from './bookmaker.controller';
import { BookmakerService } from './bookmaker.service';

@Module({
    controllers: [BookmakerController],
    providers: [BookmakerService],
})
export class BookmakerModule {}