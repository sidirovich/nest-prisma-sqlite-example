import { Module } from '@nestjs/common';
import { BookmakerController } from './bookmaker/bookmaker.controller';
import { BookmakerService } from './bookmaker/bookmaker.service';
import { BookmakerModule } from './bookmaker/bookmaker.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BookmakerController],
  providers: [PrismaService, BookmakerService, AppService],
})
export class AppModule {}
