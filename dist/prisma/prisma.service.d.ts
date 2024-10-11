import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    readonly config: ConfigService;
    constructor(config: ConfigService);
}
