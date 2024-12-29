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

  // Update an employee
  async update(id: number, token: string, updateServiceRhDto: UpdateServiceRhDto){

    const data = {
      ...updateServiceRhDto,
      id,
      token,
    };

    // return data;
    const result = await this.serviceBClient.send({cmd: 'update-employee'}, data).toPromise();
    return result
  }

  async findAll() {
    const result = await this.serviceBClient.send({cmd: 'find-all'}, {}).toPromise();
    return result
  }

  // Find an employee by ID
  async findOne(id: number) {
    const result = await this.serviceBClient.send({cmd: 'find-one'}, {}).toPromise();
    return result
  }

  // Remove an employee
  async remove(id: number): Promise<void> {
    const paylod = 10;
    const result = await this.serviceBClient.send({cmd: 'create-employee'}, paylod).toPromise();
    return result
  }
  
}
