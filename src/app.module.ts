import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlShortenerController } from './url-shortener/url-shortener.controller';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { UrlShortenerService } from './url-shortener/url-shortener.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UrlShortenerModule, ConfigModule.forRoot()],
  controllers: [AppController, UrlShortenerController],
  providers: [AppService, UrlShortenerService],
})
export class AppModule {}
