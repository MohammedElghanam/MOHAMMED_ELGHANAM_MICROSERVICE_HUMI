import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { KeycloakService } from 'src/common/keycloak/keycloak.service';
import { MinioService } from './minio.service';

@Module({
  controllers: [OffersController],
  providers: [
    {
      provide: RolesGuard,
      useClass: RolesGuard,
    },
    KeycloakService,
    OffersService,
    MinioService,
  ],
})
export class OffersModule {}
