import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ServiceOffersService } from './service_offers.service';
import { CreateServiceOfferDto } from './dto/create-service_offer.dto';
import { UpdateServiceOfferDto } from './dto/update-service_offer.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { log } from 'console';

@Controller('service-offers')
export class ServiceOffersController {
  constructor(private readonly serviceOffersService: ServiceOffersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@Body() createServiceOfferDto: CreateServiceOfferDto, @UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    const token = req['token'];
    return await this.serviceOffersService.create(createServiceOfferDto, file, token);
  }

  @Get()
  findAll(@Req() req: Request) {
    const token = req['token'];
    return this.serviceOffersService.findAll(token);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    const token = req['token'];
    return this.serviceOffersService.findOne(id, token);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceOfferDto: UpdateServiceOfferDto) {
    return this.serviceOffersService.update(+id, updateServiceOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    const token = req['token'];
    return this.serviceOffersService.remove(id, token);
  }
}
