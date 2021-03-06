import { Controller, Get, Post, Body, Param, Delete, Patch, HttpStatus, HttpCode, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

/**
 * Api End point for employee module
 */
@Controller('/v1/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  /**
   * Function to create a new Employee
   * @param createEmployeeDto
   * @returns - the newly created employee
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  /**
   * Function to return all the employees
   * @param queryObj
   * @returns - all the employees by query
   */
  @Get()
  findAll(@Query() queryObj) {
    return this.employeesService.findAll(queryObj);
  }

  /**
   * Function to return the employee specified by id
   * @param id
   * @returns - employee with id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
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
    return this.employeesService.update(id, updateEmployeeDto);
  }

  /**
   * Deletes the employee specified by id
   * @param id
   */
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
