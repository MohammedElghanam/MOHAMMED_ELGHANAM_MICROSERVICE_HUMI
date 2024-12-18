import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';
import { UpdateServiceRhDto } from './dto/update-service_rh.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ServiceRhService {

  constructor(
    @Inject('SERVICE_2') private readonly serviceBClient: ClientProxy,
  ) {}

  async create(createServiceRhDto: CreateServiceRhDto) {
    const result = await this.serviceBClient.send({cmd: 'creat-employee'}, createServiceRhDto).toPromise();
    return result
  }

  findAll() {
    return `This action returns all serviceRh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceRh`;
  }

  update(id: number, updateServiceRhDto: UpdateServiceRhDto) {
    return `This action updates a #${id} serviceRh`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceRh`;
  }
}
