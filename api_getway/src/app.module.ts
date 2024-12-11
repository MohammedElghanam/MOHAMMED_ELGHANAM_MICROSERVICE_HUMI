import { Module } from '@nestjs/common';
import { MicroservicesModule } from './microservices.module'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MicroservicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
