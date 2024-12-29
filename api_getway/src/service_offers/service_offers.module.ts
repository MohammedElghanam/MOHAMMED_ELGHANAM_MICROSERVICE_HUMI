import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ServiceOffersService } from './service_offers.service';
import { ServiceOffersController } from './service_offers.controller';
import { MicroservicesModule } from 'src/microservices.module';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  imports: [MicroservicesModule],
  controllers: [ServiceOffersController],
  providers: [ServiceOffersService],
})
export class ServiceOffersModule {
  configure( middleware_offre: MiddlewareConsumer) {
    middleware_offre
        .apply(LoggerMiddleware)
        .forRoutes(ServiceOffersController)
    }
}
