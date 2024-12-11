import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_data' })
  getData(): string {
    return 'Data from Service A';
  }

  @Get('test')
  test() {
    return "tst guru";
  }
  
}
