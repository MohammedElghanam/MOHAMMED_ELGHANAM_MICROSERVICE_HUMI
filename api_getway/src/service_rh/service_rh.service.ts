import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';
import { UpdateServiceRhDto } from './dto/update-service_rh.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ServiceRhService {

  constructor(
    @Inject('SERVICE_2') private readonly serviceBClient: ClientProxy,
  ) {}

  async create(createServiceRhDto: CreateServiceRhDto, token: string) {

    const paylod = {
      ...createServiceRhDto,
      token,
    };

    const result = await this.serviceBClient.send({cmd: 'create-employee'}, paylod).toPromise();
    return result
  }

  
}
