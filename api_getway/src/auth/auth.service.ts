import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(
    @Inject('SERVICE_1') private readonly serviceAClient: ClientProxy,
  ) {}

  async login(body: any) {
    const result = await this.serviceAClient.send({ cmd: 'login' }, body).toPromise();
    return result;
  }
}
