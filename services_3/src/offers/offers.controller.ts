import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { MessagePattern } from '@nestjs/microservices';
import { RolesGuard } from 'src/common/guards/roles.guard';

@UseGuards(RolesGuard)
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Roles('rh')
  @MessagePattern({ cmd: 'create-offre' })
  async create(createOfferDto: CreateOfferDto) {
    return await this.offersService.create(createOfferDto);
  }

  @Roles('rh')
  @MessagePattern({ cmd: 'find-all-offres' })
  findAll() {
    return this.offersService.findAll();
  }

  @Roles('rh')
  @MessagePattern({ cmd: 'find-one-offre' })
  findOne(paylod: any) {
    return this.offersService.findOne(paylod.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.update(+id, updateOfferDto);
  }

  @Roles('rh')
  @MessagePattern({ cmd: 'remove-offre' })
  remove(paylod: any) {
    return this.offersService.remove(paylod.id);
  }
}
