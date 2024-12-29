import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {


  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ){}

  create(createEmployeeDto: CreateEmployeeDto) {
    const { name, email, password } = createEmployeeDto;
    const user = this.employeeRepository.create({ name, email, password });
    return this.employeeRepository.save(user);
  }


  
  async update(data: UpdateEmployeeDto) {
    const { name, email, password, id } = data;
    await this.employeeRepository.update(id, { name, email, password });
    return this.findOne(id); 
  }

  async findAll() {
    return this.employeeRepository.find();
  }

  async findOne(id: number) {
    return this.employeeRepository.findOneBy({ id });
  }


 
  async remove(id: number) {
    const result = await this.employeeRepository.delete(id);
    if (result) {
      return { message: 'Employee removed' };
    }else{
      return { message: 'Employee not found' };
    }
  }

}
