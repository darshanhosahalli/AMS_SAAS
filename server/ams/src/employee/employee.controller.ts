import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, UsePipes, Patch, BadRequestException, HttpCode, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

/**
 * Api End point for employee module
 */
@Controller('/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  /**
   * Function to create a new Employee
   * @param createEmployeeDto
   * @returns - the newly created employee
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  /**
   * Function to return all the employees
   * @returns - all the employees 
   */
  @Get()
  findAll(@Query() query) {
    return this.employeeService.findAll(query);
  }

  /**
   * Function to return the employee specified by id
   * @param id
   * @returns - employee with id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  /**
   * Function to update an employee with the specified id
   * @param id
   * @param updateEmployeeDto
   * @returns - the updated employee
   */
  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  /**
   * Deletes the employee specified by id
   * @param id
   */
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
