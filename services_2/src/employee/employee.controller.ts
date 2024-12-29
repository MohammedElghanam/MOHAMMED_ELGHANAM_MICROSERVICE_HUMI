import { Controller, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { MessagePattern } from '@nestjs/microservices';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { UpdateEmployeeDto } from './dto/update-employee.dto';


@UseGuards(RolesGuard)
@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
  ) {}

  @Roles('employee')
  @MessagePattern({ cmd: 'create-employee' })
  async create(payload: CreateEmployeeDto) {
    return this.employeeService.create(payload);
  }

  @Roles('employee')
  @MessagePattern({ cmd: 'update-employee' })
  async update(data: UpdateEmployeeDto) {
    return this.employeeService.update(data);
  }

  @Roles('employee')
  @MessagePattern({ cmd: 'find-one-employee' })
  async findOne(data: { id: number, token: string }) {
    return this.employeeService.findOne(data.id);
  }

  @Roles('employee')
  @MessagePattern({ cmd: 'find-all-employees' })
  async findAll() {
    return this.employeeService.findAll();
  }

  @Roles('employee')
  @MessagePattern({ cmd: 'remove-employee' })
  async remove(data:  { id: number, token: string }) {
    return this.employeeService.remove(data.id);
  }

}
