import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { KeycloakService } from 'src/common/keycloak/keycloak.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
@Module({
  imports: [ TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    {
      provide: RolesGuard,
      useClass: RolesGuard,
    },
    KeycloakService,
  ],
})
export class EmployeeModule {}
