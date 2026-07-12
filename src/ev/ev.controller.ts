import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private readonly configService: ConfigService){}

    @Get()
    getUrl(){
        return this.configService.getDbUrl();
    }
}
