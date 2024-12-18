import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'process_task' })
  processTask(data: any): string {
    return `Task processed with data: ${JSON.stringify(data)}`;
  }

}
