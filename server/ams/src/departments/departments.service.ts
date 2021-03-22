import { Injectable, ConflictException, InternalServerErrorException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { DepartmentDto } from './dto/department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentRepository } from './Department.Repository';
import { IDepartment } from './interface/IDepartment';

@Injectable()
export class DepartmentsService {

  constructor(@InjectRepository(DepartmentRepository) private departmentRepository: DepartmentRepository){}
  async create(createDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
      return await this.departmentRepository.createDepartment(createDepartmentDto);
    } catch(error) {
      if(error.code == 23505) {
        throw new ConflictException("Employee with the Empid already exists");
      }
      throw new InternalServerErrorException("Someting went wrong please try again");
    }
  }

  async findAll(): Promise<IDepartment[]> {
    try {
      return await this.departmentRepository.find();
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
    }
  }

  async findOne(id: number): Promise<IDepartment> {
    try {
      const department = await this.departmentRepository.findOne({ did: id})
      if (!department) {
        throw new NotFoundException(`department with ${id} not found`);
      }
      return department;
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
    }
  }

  async update(id: number, updateDepartmentDto: DepartmentDto): Promise<IDepartment> {
    try {
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
    }
  }
}
