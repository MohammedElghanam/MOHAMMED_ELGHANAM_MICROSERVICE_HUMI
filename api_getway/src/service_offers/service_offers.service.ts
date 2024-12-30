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

  async findAll(token: string) {
    const result = await this.serviceCClient.send({cmd: 'find-all-offres'}, {token}).toPromise();
    return result
  }

  async findOne(id: string, token: string) {
    const paylod = {
      id,
      token,
    };
    const result = await this.serviceCClient.send({cmd: 'find-one-offre'}, paylod).toPromise();
    return result
  }

  update(id: number, updateServiceOfferDto: UpdateServiceOfferDto) {
    return `This action updates a #${id} serviceOffer`;
  }

  remove(id: string, token: string) {
    return `This action removes a #${id} serviceOffer`;
  }
}

