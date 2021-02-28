import { Injectable, Inject, Scope } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { EmployeeEntity } from './entities/employee.entity';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';

/**
 * Service class for CRUD operations of employee module
 */
@Injectable()
export class EmployeesService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<EmployeeEntity>;

  /**
   * creates a new employee
   * @throws conflict exception
   * @param createEmployeeDto
   */
  create(createEmployeeDto: CreateEmployeeDto) {
    const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
    return createOperation.process();
  }

   /**
   * fetch all the employees
   * @returns - all the employees
   */
  findAll() {
    const findAllOperaion = this.crudfactoryService.getOperation(OperationsEnum.Get);
    return findAllOperaion.process();
  }

  /**
   * Fetch an employee by id
   * @param id
   * @returns - employee by id
   */
  findOne(id: number) {
    const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
    return findOneOperation.process();
  }

  /**
   * Update the employee by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated employee by id
   */
  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
    return updateOperation.process();
  }

  /**
   * Deletes an employee specified by id
   * @param id
   * @throws Not found Exception
   * @throws Inrernal server exception
   */
  remove(id: number) {
    const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
    return removeOperation.process();
  }
}
