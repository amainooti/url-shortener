"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlShortenerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UrlShortenerService = class UrlShortenerService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createUrl(createUrl) {
        const shortUrl = this.generateShortUrl();
        const url = await this.prismaService.url.create({
            data: {
                longUrl: createUrl.long,
                shortUrl,
            },
        });
        return { message: 'successfully created url', shortUrl };
    }
    generateShortUrl() {
        return Math.random().toString(36).substring(7);
    }
    async getUrl(url) {
        const urlEntry = await this.prismaService.url.findUnique({
            where: {
                shortUrl: url,
            },
        });
        if (!urlEntry) {
            throw new common_1.NotFoundException('Could not find short url, make sure short url was given to you');
        }
        return { url: urlEntry.longUrl, statusCode: 302 };
    }
};
exports.UrlShortenerService = UrlShortenerService;
exports.UrlShortenerService = UrlShortenerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UrlShortenerService);
//# sourceMappingURL=url-shortener.service.js.map