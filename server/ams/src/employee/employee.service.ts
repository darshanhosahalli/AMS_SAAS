import { Injectable, ConflictException, NotFoundException, BadRequestException, InternalServerErrorException, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { IEmployee } from './interface/IEmployee';
import { EmployeeEntity } from './entities/employee.entity';
import { BaseEntity } from 'typeorm';
import { QueryFacade } from 'src/ApiFeatures/QueryFacade';
import { CRUDFactory } from 'src/CRUDFactory/CRUDFactory';
import { OperationsEnum } from 'src/CRUDFactory/operation.enum';
import { CrudService } from 'src/crud/crud.service';

/**
 * Service class for CRUD operations of employee module
 */
@Injectable()
export class EmployeeService {

  @Inject(CrudService)
  private crudService :CrudService<EmployeeEntity>;


  constructor(@InjectRepository(EmployeeRepository) private employeeRepository:EmployeeRepository) {}

  /**
   * creates a new employee
   * @throws conflict exception
   * @param createEmployeeDto
   */
  async create(createEmployeeDto: CreateEmployeeDto): Promise<IEmployee> {
    //const operation = this.crudFactory.getOperation(OperationsEnum.Create);
    return //await operation.accept(this.employeeRepository);
    /*try {
        return await this.employeeRepository.createEmployee(createEmployeeDto);
      } catch(error) {
      if(error.code == 23505) {
        throw new ConflictException("Employee with the Empid already exists");
      }
      throw new InternalServerErrorException("Someting went wrong please try again");
    }*/
  }

  /**
   * fetch all the employees
   * @returns - all the employees
   */
  async findAll(queryString): Promise<BaseEntity[]> {
    const queryFacade = new QueryFacade();
    const results = await queryFacade.getResults(this.employeeRepository, queryString);
    return results;
  }

  /**
   * Fetch an employee by id
   * @param id
   * @returns - employee by id
   */
  async findOne(id: string): Promise<IEmployee> {
    const employee = await this.getOneEmployee(id);
    if(!employee) {
      throw new NotFoundException(`Employee with ${id} does not exist`);
    }
    return employee;
  }

  /**
   * Update the employee by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated employee by id
   */
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<IEmployee> {
    try {
      const employee = await this.getOneEmployee(id);
      if(!employee) {
        throw new NotFoundException(`Employee with ${id} does not exist`);
      }
      Object.assign(employee, updateEmployeeDto);
      if(employee.empId != id) {
        throw new BadRequestException('cannot update the empId property');
      }
      return await employee.save();
    } catch(error) {
      throw new InternalServerErrorException('Unable to update employee,try again!');
    }
  }

  /**
   * Deletes an employee specified by id
   * @param id
   * @throws Not found Exception
   * @throws Inrernal server exception
   */
  async remove(id: string): Promise<void> {
    const employee = await this.getOneEmployee(id);
    if(!employee) {
      throw new NotFoundException(`Employee with ${id} does not exist`);
    }
    try {
      await this.employeeRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('unable to remove employee try again later')
    }
  }

  /**
   * private method which finds and retuns the user specfied by id
   * @param id
   * @returns - The employee entitiy object of id
   */
  private async getOneEmployee(id: string): Promise<EmployeeEntity> {
    return await this.employeeRepository.findOne({ empId: id});
  }
}
