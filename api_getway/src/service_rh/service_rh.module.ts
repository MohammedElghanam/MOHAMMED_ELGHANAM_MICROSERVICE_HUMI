import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ServiceRhService } from './service_rh.service';
import { ServiceRhController } from './service_rh.controller';
import { MicroservicesModule } from 'src/microservices.module';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  imports: [MicroservicesModule],
  controllers: [ServiceRhController],
  providers: [ServiceRhService],
})
export class ServiceRhModule {
  configure( middleware_rh: MiddlewareConsumer) {
    middleware_rh
      .apply(LoggerMiddleware)
      .forRoutes(ServiceRhController)
  }
}
