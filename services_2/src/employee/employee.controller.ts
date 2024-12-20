import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { MessagePattern } from '@nestjs/microservices';
import { KeycloakService } from './Keycloak.service';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly keycloakService: KeycloakService,
  ) {}

  // @MessagePattern({ cmd:'create-employee' })
  // create(createEmployeeDto: CreateEmployeeDto) {
  //   return this.employeeService.create(createEmployeeDto);
  // }

  @MessagePattern({ cmd: 'create-employee' })
async create(payload: CreateEmployeeDto) {
  const { token } = payload;

  const decodedToken = await this.keycloakService.verifyToken(token);

 
  if (!this.keycloakService.hasRole(decodedToken, 'employee')) {
    throw new UnauthorizedException('User does not have the required role.');
  }

 
  return this.employeeService.create(payload);
}



  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
