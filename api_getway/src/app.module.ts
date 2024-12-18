import { Module } from '@nestjs/common';
import { MicroservicesModule } from './microservices.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServiceRhModule } from './service_rh/service_rh.module';

@Module({
  imports: [MicroservicesModule, AuthModule, ServiceRhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
