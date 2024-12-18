import { Module } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { ServiceRhController } from './service_rh.controller';
import { MicroservicesModule } from 'src/microservices.module';

@Module({
  imports: [MicroservicesModule],
  controllers: [ServiceRhController],
  providers: [ServiceRhService],
})
export class ServiceRhModule {}
