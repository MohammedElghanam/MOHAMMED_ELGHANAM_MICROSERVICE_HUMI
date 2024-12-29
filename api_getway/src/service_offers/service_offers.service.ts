import { Injectable } from '@nestjs/common';
import { CreateServiceOfferDto } from './dto/create-service_offer.dto';
import { UpdateServiceOfferDto } from './dto/update-service_offer.dto';

@Injectable()
export class ServiceOffersService {
  create(createServiceOfferDto: CreateServiceOfferDto) {
    return 'This action adds a new serviceOffer';
  }

  findAll() {
    return `This action returns all serviceOffers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceOffer`;
  }

  update(id: number, updateServiceOfferDto: UpdateServiceOfferDto) {
    return `This action updates a #${id} serviceOffer`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceOffer`;
  }
}
