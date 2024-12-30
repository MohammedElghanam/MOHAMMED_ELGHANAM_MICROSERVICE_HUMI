import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceOfferDto } from './dto/create-service_offer.dto';
import { UpdateServiceOfferDto } from './dto/update-service_offer.dto';
import { ClientProxy } from '@nestjs/microservices';
import { log } from 'console';

@Injectable()
export class ServiceOffersService {

  constructor(
    @Inject('SERVICE_3') private readonly serviceCClient: ClientProxy,
  ) {}

  async create(createServiceOfferDto: CreateServiceOfferDto, file: Express.Multer.File, token: string) {
    
    const paylod = {
      ...createServiceOfferDto,
      token,
      file,
    };

    // log(createServiceOfferDto);
    // return createServiceOfferDto;

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

