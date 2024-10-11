import { Module } from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UrlShortenerService],
  imports: [PrismaModule],
})
export class UrlShortenerModule {}
