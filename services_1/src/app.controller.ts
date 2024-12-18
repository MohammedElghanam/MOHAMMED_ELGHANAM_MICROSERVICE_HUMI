import { Body, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @MessagePattern({ cmd: 'get_data' })
  getData(): string {
    return 'Data from Service A';
  }

  @MessagePattern({ cmd: 'login' })
  async login (@Payload() loginDto: any) {
    const result = await this.appService.login(loginDto);
    return result;
}
  
}
