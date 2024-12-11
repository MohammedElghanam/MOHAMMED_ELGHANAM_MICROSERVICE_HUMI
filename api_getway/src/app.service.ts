import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('SERVICE_1') private readonly serviceAClient: ClientProxy, 
    @Inject('SERVICE_2') private readonly serviceBClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async create() {
    const result = await this.serviceAClient.send({ cmd: 'get_data' }, {}).toPromise(); 
    return result 
  }
}
