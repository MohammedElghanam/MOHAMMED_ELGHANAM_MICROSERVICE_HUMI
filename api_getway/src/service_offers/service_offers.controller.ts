import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ServiceOffersService } from './service_offers.service';
import { CreateServiceOfferDto } from './dto/create-service_offer.dto';
import { UpdateServiceOfferDto } from './dto/update-service_offer.dto';

@Controller('service-offers')
export class ServiceOffersController {
  constructor(private readonly serviceOffersService: ServiceOffersService) {}

  @Post()
  create(@Body() createServiceOfferDto: CreateServiceOfferDto, @Req() req) {
    const token = req['token'];
    return this.serviceOffersService.create(createServiceOfferDto, token);
  }

  @Get()
  findAll() {
    return this.serviceOffersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceOffersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceOfferDto: UpdateServiceOfferDto) {
    return this.serviceOffersService.update(+id, updateServiceOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceOffersService.remove(+id);
  }
}
