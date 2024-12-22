import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeeService {
  create(createEmployeeDto: CreateEmployeeDto) {
    const { name, token } = createEmployeeDto;
    return {
      name: name,
      token: token,
    };
  }

}
