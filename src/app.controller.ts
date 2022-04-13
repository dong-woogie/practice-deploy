import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api')
  getApi(): string {
    return this.appService.getApi();
  }

  @Get('env')
  getEnv() {
    return this.appService.getEnv();
  }
}
