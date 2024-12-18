import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MicroservicesModule } from 'src/microservices.module';

@Module({
  imports: [MicroservicesModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
