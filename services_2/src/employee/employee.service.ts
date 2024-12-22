import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {


  constructor(
    @InjectRepository(Employee)
    private userRepository: Repository<Employee>,
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    const { name, email, password } = createEmployeeDto;
    const user = this.userRepository.create({ name, email, password });
    return this.userRepository.save(user);
  }

}
