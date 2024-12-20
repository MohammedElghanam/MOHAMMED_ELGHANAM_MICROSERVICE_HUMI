import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';

@Controller('service-rh')
export class ServiceRhController {
  constructor(private readonly serviceRhService: ServiceRhService) {}

  @Post('/employee')
  create(@Body() createServiceRhDto: CreateServiceRhDto, @Request() req) {
    const token = req['token'];
    return this.serviceRhService.create(createServiceRhDto, token);
  }

}
