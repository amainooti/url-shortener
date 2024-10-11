import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortenerController } from './url-shortener/url-shortener.controller';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';

@Module({
  imports: [UrlShortenerModule],
  controllers: [AppController, UrlShortenerController],
  providers: [AppService],
})
export class AppModule {}
