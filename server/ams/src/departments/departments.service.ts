<<<<<<< HEAD
import { Injectable, ConflictException, InternalServerErrorException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { DepartmentDto } from './dto/department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentRepository } from './Department.Repository';
import { IDepartment } from './interface/IDepartment';
=======
import { Injectable, Inject, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { DepartmentEntity } from './entities/department.entity';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentRepository } from './department.repository';
import { IDepartment } from './interface/IDepartment';
import { DepartmentDto } from './dto/department.dto';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2

@Injectable()
export class DepartmentsService {

<<<<<<< HEAD
  constructor(@InjectRepository(DepartmentRepository) private departmentRepository: DepartmentRepository){}
  async create(createDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
      return await this.departmentRepository.createDepartment(createDepartmentDto);
    } catch(error) {
      if(error.code == 23505) {
        throw new ConflictException("Employee with the Empid already exists");
      }
      throw new InternalServerErrorException("Someting went wrong please try again");
=======
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
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }

  async findAll(): Promise<IDepartment[]> {
    try {
<<<<<<< HEAD
      return await this.departmentRepository.find();
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
=======
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.departmentRepository);
      return await findAllOperation.process();
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }

  async findOne(id: number): Promise<IDepartment> {
    try {
<<<<<<< HEAD
      const department = await this.departmentRepository.findOne({ did: id})
      if (!department) {
        throw new NotFoundException(`department with ${id} not found`);
      }
      return department;
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
=======
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.departmentRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('department not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }

  async update(id: number, updateDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
<<<<<<< HEAD
      const department = await this.departmentRepository.findOne({ did: id})
      if (!department) {
        throw new NotFoundException(`department with ${id} not found`);
      }
      Object.assign(department, updateDepartmentDto);
      if(department.did != id) {
        throw new ForbiddenException(`Department id cannot be updated`)
      }
      return await department.save();
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const department = await this.departmentRepository.findOne({ did: id})
      if (!department) {
        throw new NotFoundException(`department with ${id} not found`);
      }
      await department.remove();
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
=======
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
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }
}
