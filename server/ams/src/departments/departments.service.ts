import { Injectable, Inject, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DepartmentEntity } from './entities/department.entity';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentRepository } from './department.repository';
import { IDepartment } from './interface/IDepartment';
import { DepartmentDto } from './dto/department.dto';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';

@Injectable()
export class DepartmentsService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<DepartmentEntity>;

  constructor(@InjectRepository(DepartmentRepository) private departmentRepository: DepartmentRepository){}

  async create(createDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.departmentRepository);
      return await createOperation.process(createDepartmentDto);
    } catch(error) {
      if(error.status == 409) {
        throw new ConflictException(`deaprtment of name ${createDepartmentDto.name} already exists`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  async findAll(): Promise<IDepartment[]> {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.departmentRepository);
      return await findAllOperation.process();
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  async findOne(id: number): Promise<IDepartment> {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.departmentRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('department not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  async update(id: number, updateDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.departmentRepository);
      return await updateOperation.process(updateDepartmentDto, id, 'did');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('department resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  async remove(id: number) {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.departmentRepository);
      return await removeOperation.process(id, 'did');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('department resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }
}
