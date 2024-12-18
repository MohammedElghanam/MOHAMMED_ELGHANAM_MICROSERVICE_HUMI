import { Module } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { ServiceRhController } from './service_rh.controller';

@Module({
  controllers: [ServiceRhController],
  providers: [ServiceRhService],
})
export class ServiceRhModule {}
