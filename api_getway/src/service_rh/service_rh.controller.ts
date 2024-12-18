import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';
import { UpdateServiceRhDto } from './dto/update-service_rh.dto';

@Controller('service-rh')
export class ServiceRhController {
  constructor(private readonly serviceRhService: ServiceRhService) {}

  @Post()
  create(@Body() createServiceRhDto: CreateServiceRhDto) {
    return this.serviceRhService.create(createServiceRhDto);
  }

  @Get()
  findAll() {
    return this.serviceRhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceRhService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceRhDto: UpdateServiceRhDto) {
    return this.serviceRhService.update(+id, updateServiceRhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceRhService.remove(+id);
  }
}
