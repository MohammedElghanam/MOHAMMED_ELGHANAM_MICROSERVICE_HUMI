import { Body, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
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
  async login (@Body() loginDto: LoginDto, @Res() res: Response): Promise<Response> {
    try {
        const result = await this.appService.login(loginDto);
        return res.status(200).json({
            token: result.token,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}
  
}
