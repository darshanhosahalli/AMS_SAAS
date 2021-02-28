import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

/**
 * Service class for CRUD operations of employee module
 */
@Injectable()
export class EmployeesService {

  /**
   * creates a new employee
   * @throws conflict exception
   * @param createEmployeeDto
   */
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

   /**
   * fetch all the employees
   * @returns - all the employees
   */
  findAll() {
    return `This action returns all employees`;
  }

  /**
   * Fetch an employee by id
   * @param id
   * @returns - employee by id
   */
  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  /**
   * Update the employee by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated employee by id
   */
  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  /**
   * Deletes an employee specified by id
   * @param id
   * @throws Not found Exception
   * @throws Inrernal server exception
   */
  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
