import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { KeycloakService } from './Keycloak.service';

@Module({
  controllers: [EmployeeController],
  providers: [KeycloakService, EmployeeService],
})
export class EmployeeModule {}
