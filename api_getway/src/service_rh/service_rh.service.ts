import { Injectable } from '@nestjs/common';
import { CreateServiceRhDto } from './dto/create-service_rh.dto';
import { UpdateServiceRhDto } from './dto/update-service_rh.dto';

@Injectable()
export class ServiceRhService {
  create(createServiceRhDto: CreateServiceRhDto) {
    return 'This action adds a new serviceRh';
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
