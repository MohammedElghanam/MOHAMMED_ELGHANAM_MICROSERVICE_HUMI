import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceOfferDto } from './dto/create-service_offer.dto';
import { UpdateServiceOfferDto } from './dto/update-service_offer.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ServiceOffersService {

  constructor(
    @Inject('SERVICE_3') private readonly serviceCClient: ClientProxy,
  ) {}

  async create(createServiceOfferDto: CreateServiceOfferDto, token: string) {
    return {
      message: 'Service offer created successfully',
      data: createServiceOfferDto,
      token: token
    };

    const paylod = {
      ...createServiceOfferDto,
      token,
    };

    const result = await this.serviceCClient.send({cmd: 'create-offre'}, paylod).toPromise();
    return result
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

