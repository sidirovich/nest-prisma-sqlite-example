import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
    Prisma,
    Bookmaker,
} from '@prisma/client';

@Injectable()
export class BookmakerService {
    constructor(private prisma: PrismaService) {}

    async bookmakers(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.BookmakerWhereUniqueInput;
        where?: Prisma.BookmakerWhereInput;
    }): Promise<Bookmaker[]> {
        const { skip, take, cursor, where } = params;
        return this.prisma.bookmaker.findMany({
            skip,
            take,
            cursor,
            where,
        });
    }

    async createBookmaker(data: Prisma.BookmakerCreateInput): Promise<Bookmaker> {
        return this.prisma.bookmaker.create({
            data,
        });
    }

    async updateBookmaker(params: {
        where: Prisma.BookmakerWhereUniqueInput;
        data: Prisma.BookmakerUpdateInput;
    }): Promise<Bookmaker> {
        const { where, data } = params;
        return this.prisma.bookmaker.update({
            where,
            data,
        });
    }

    async deleteBookmaker(where: Prisma.BookmakerWhereUniqueInput): Promise<Bookmaker> {
        return this.prisma.bookmaker.delete({
            where,
        });
    }
}