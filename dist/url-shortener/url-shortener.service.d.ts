import { PrismaService } from '../prisma/prisma.service';
import { CreateUrlDto } from './DTO';
export declare class UrlShortenerService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUrl(createUrl: CreateUrlDto): Promise<{
        message: string;
        shortUrl: string;
    }>;
    private generateShortUrl;
    getUrl(url: string): Promise<{
        url: string;
        statusCode: number;
    }>;
}
