import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { log } from 'node:console';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appSrevice: AppService,
  ) {}

  @Get()
  getHello() {
    // return this.appService.getHello();
  }

  
  // @Get('service-a')
  // callServiceA() {
  //   // const result = this.serviceAClient.send({ cmd: 'get_data' }, {}).toPromise();  
  //   // log('hello');  
  //   // return result;
  // }

  @Get('service')
  callService() {
    const result = this.appSrevice.create(); 
    log('hello');   
    return result;
  }

  
  // @Get('service-b')
  // async callServiceB(@Query('data') data: string) {
  //   // const result = await this.serviceBClient.send({ cmd: 'process_task' }, { data }).toPromise();
  //   // return result;
  // }
}
