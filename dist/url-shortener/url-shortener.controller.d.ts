import { UrlShortenerService } from './url-shortener.service';
import { CreateUrlDto } from './DTO';
export declare class UrlShortenerController {
    readonly urlService: UrlShortenerService;
    private logger;
    constructor(urlService: UrlShortenerService);
    createShortUrl(url: CreateUrlDto): Promise<{
        message: string;
        shortUrl: string;
    }>;
    getShortUrl(shortUrl: string): void;
}
