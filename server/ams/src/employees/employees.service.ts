import { Injectable, Inject, Scope, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { EmployeeEntity } from './entities/employee.entity';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { IEmployee } from './interfaces/employee.interface';

/**
 * Service class for CRUD operations of employee module
 */
@Injectable()
export class EmployeesService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<EmployeeEntity>;

  constructor(@InjectRepository(EmployeeRepository) private employeeRepository: EmployeeRepository){}

  /**
   * creates a new employee
   * @throws conflict exception
   * @param createEmployeeDto
   */
  async create(createEmployeeDto: CreateEmployeeDto): Promise<IEmployee> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.employeeRepository);
      return await createOperation.process(createEmployeeDto);
    } catch(error) {
      if(error.statusCode == 409) {
        throw new ConflictException(`employee of id ${createEmployeeDto.empId} already exists`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

   /**
   * fetch all the employees
   * @returns - all the employees
   */
  async findAll(): Promise<IEmployee[]> {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.employeeRepository);
      return await findAllOperation.process();
    } catch(error) {
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Fetch an employee by id
   * @param id
   * @returns - employee by id
   */
  async findOne(id: string): Promise<IEmployee> {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.employeeRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.statusCode = 404) {
        throw new NotFoundException('employee resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Update the employee by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated employee by id
   */
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<IEmployee> {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.employeeRepository);
      return await updateOperation.process(updateEmployeeDto, id, 'empId');
    } catch(error) {
      if(error.statusCode = 404) {
        throw new NotFoundException('employee resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Deletes an employee specified by id
   * @param id
   * @throws Not found Exception
   * @throws Inrernal server exception
   */
  async remove(id: string): Promise<void> {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.employeeRepository);
      return await removeOperation.process(id, 'empId');
    } catch(error) {
      if(error.statusCode = 404) {
        throw new NotFoundException('employee resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }
}
