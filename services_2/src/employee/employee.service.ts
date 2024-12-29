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


  
  // async update( employee: UpdateEmployeeDto) {
  //   const { name, email, password, id } = employee;
  //   await this.employeeRepository.update(id, employee);
  //   return this.findOne(id); 
  // }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOneBy({ id });
  }


 
  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }

}
