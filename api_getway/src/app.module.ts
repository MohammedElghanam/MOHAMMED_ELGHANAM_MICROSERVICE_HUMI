import { Module } from '@nestjs/common';
import { MicroservicesModule } from './microservices.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServiceRhModule } from './service_rh/service_rh.module';
import { ServiceOffersModule } from './service_offers/service_offers.module';

@Module({
  imports: [MicroservicesModule, AuthModule, ServiceRhModule, ServiceOffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
