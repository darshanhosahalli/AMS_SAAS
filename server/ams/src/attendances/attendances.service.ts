import { ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { EmployeeRepository } from 'src/employees/employee.repository';
import { EmployeeEntity } from 'src/employees/entities/employee.entity';
import { AttendanceRepository } from './attendance.repository';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';

/**
 * Service class for CRUD operations of attendance module
 */
@Injectable()
export class AttendancesService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<Attendance>;

  constructor(@InjectRepository(AttendanceRepository) private attendanceRepository: AttendanceRepository){}

  /**
   * add attendance
   * @throws conflict exception
   * @param createAttendanceDto
   */
  async create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.attendanceRepository);
      return await createOperation.process(createAttendanceDto);
    } catch(error) {
      if(error.status == 409) {
        throw new ConflictException(`attendance on ${createAttendanceDto.date} for ${createAttendanceDto.empid} is already marked`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

   /**
   * fetch all the attendance
   * @param - query object
   * @returns - all the attendance
   */
  async findAll(queryObj: any): Promise<Attendance[]> {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.attendanceRepository);
      return await findAllOperation.process(queryObj);
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Fetch an attendance by id
   * @param id
   * @returns - attendance by id
   */
  async findOne(id: number): Promise<Attendance> {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.attendanceRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('attendance not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Update the attendance by id
   * @param id
   * @param updateAttendanceDto 
   * @returns - updated attendance by id
   */
  async update(id: number, updateAttendanceDto: UpdateAttendanceDto): Promise<Attendance> {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.attendanceRepository);
      return await updateOperation.process(updateAttendanceDto, id, 'aid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('attendance resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * removes an attendance by id
   * @param id
   * @returns
   */
  async remove(id: number): Promise<void> {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.attendanceRepository);
      return await removeOperation.process(id, 'empid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('employee resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }
}
