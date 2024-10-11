"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const url_shortener_controller_1 = require("./url-shortener/url-shortener.controller");
const url_shortener_module_1 = require("./url-shortener/url-shortener.module");
const url_shortener_service_1 = require("./url-shortener/url-shortener.service");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [url_shortener_module_1.UrlShortenerModule, config_1.ConfigModule.forRoot()],
        controllers: [app_controller_1.AppController, url_shortener_controller_1.UrlShortenerController],
        providers: [app_service_1.AppService, url_shortener_service_1.UrlShortenerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map