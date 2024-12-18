import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor( private readonly appSrevice: AppService) {}

}
