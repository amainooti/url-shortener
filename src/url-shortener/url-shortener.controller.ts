import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Redirect,
  Res,
} from '@nestjs/common';
import { UrlShortenerService } from './url-shortener.service';
import { CreateUrlDto } from './DTO';

@Controller('shorten')
export class UrlShortenerController {
  private logger = new Logger(UrlShortenerController.name);
  constructor(readonly urlService: UrlShortenerService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createShortUrl(@Body() url: CreateUrlDto) {
    return this.urlService.createUrl(url);
  }

  @Get(':short')
  @Redirect()
  getShortUrl(@Param('short') shortUrl: string) {
    this.urlService.getUrl(shortUrl);
  }
}
