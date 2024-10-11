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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UrlShortenerController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlShortenerController = void 0;
const common_1 = require("@nestjs/common");
const url_shortener_service_1 = require("./url-shortener.service");
const DTO_1 = require("./DTO");
let UrlShortenerController = UrlShortenerController_1 = class UrlShortenerController {
    constructor(urlService) {
        this.urlService = urlService;
        this.logger = new common_1.Logger(UrlShortenerController_1.name);
    }
    createShortUrl(url) {
        return this.urlService.createUrl(url);
    }
    getShortUrl(shortUrl) {
        this.urlService.getUrl(shortUrl);
    }
};
exports.UrlShortenerController = UrlShortenerController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DTO_1.CreateUrlDto]),
    __metadata("design:returntype", void 0)
], UrlShortenerController.prototype, "createShortUrl", null);
__decorate([
    (0, common_1.Get)(':short'),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Param)('short')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlShortenerController.prototype, "getShortUrl", null);
exports.UrlShortenerController = UrlShortenerController = UrlShortenerController_1 = __decorate([
    (0, common_1.Controller)('shorten'),
    __metadata("design:paramtypes", [url_shortener_service_1.UrlShortenerService])
], UrlShortenerController);
//# sourceMappingURL=url-shortener.controller.js.map