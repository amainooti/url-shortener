import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUrlDto } from './DTO';

@Injectable()
export class UrlShortenerService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUrl(createUrl: CreateUrlDto) {
    const shortUrl = this.generateShortUrl();
    const url = await this.prismaService.url.create({
      data: {
        longUrl: createUrl.long,
        shortUrl,
      },
    });
    return { message: 'successfully created url', shortUrl };
  }

  private generateShortUrl(): string {
    return Math.random().toString(36).substring(7);
  }

  async getUrl(url: string) {
    const urlEntry = await this.prismaService.url.findUnique({
      where: {
        shortUrl: url,
      },
    });
    if (!urlEntry) {
      throw new NotFoundException(
        'Could not find short url, make sure short url was given to you',
      );
    }
    return { url: urlEntry.longUrl, statusCode: 302 };
  }
}
