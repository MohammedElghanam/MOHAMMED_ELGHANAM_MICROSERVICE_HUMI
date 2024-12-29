import { Module } from '@nestjs/common';
import { ServiceOffersService } from './service_offers.service';
import { ServiceOffersController } from './service_offers.controller';

@Module({
  controllers: [ServiceOffersController],
  providers: [ServiceOffersService],
})
export class ServiceOffersModule {}
