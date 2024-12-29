import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';
import { UpdateServiceRhDto } from './dto/update-service_rh.dto';

@Controller('service-rh')
export class ServiceRhController {
  constructor(private readonly serviceRhService: ServiceRhService) {}

  @Post('/employee')
  create(@Body() createServiceRhDto: CreateServiceRhDto, @Request() req) {
    const token = req['token'];
    return this.serviceRhService.create(createServiceRhDto, token);
  }

  @Get()
  findAll() {
    return this.serviceRhService.findAll();
  }

  // Get employee by ID
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.serviceRhService.findOne(id);
  }

  // Update employee
  @Patch(':id')
  update( @Param('id') id: number, @Body() employee: UpdateServiceRhDto, @Request() req ) {
    const token = req['token'];
    return this.serviceRhService.update(id, token, employee);
  }

  // Delete employee
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serviceRhService.remove(id);
  }
}
