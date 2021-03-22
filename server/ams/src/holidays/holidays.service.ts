<<<<<<< HEAD
import { Injectable, InternalServerErrorException, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { HolidayDto } from './dto/create-holiday.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './Holiday.Repository';
import { IHoliday } from './interfaces/IHoliday';
=======
import { Injectable, Inject, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './holiday.repository';
import { IHoliday } from './interfaces/IHoliday';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { HolidayDto } from './dto/holiday.dto';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { Holiday } from './entities/holiday.entity';
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2

@Injectable()
export class HolidaysService {

<<<<<<< HEAD
  constructor(@InjectRepository(HolidayRepository) private holidayRepository: HolidayRepository){}

  async create(holidayDto: HolidayDto): Promise<IHoliday> {
    try {
      return await this.holidayRepository.createHoliday(holidayDto);
    } catch(error) {
      if(error.code == 23505) {
        throw new ConflictException("holiday with date already exists");
      }
      throw new InternalServerErrorException("Someting went wrong please try again");
    }
  }

  async findAll(): Promise<IHoliday[]> {
    try {
      return await this.holidayRepository.find();
    } catch(error) {
      throw new InternalServerErrorException("Someting went wrong please try again");
=======
  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<Holiday>;

  constructor(@InjectRepository(HolidayRepository) private holidayRepository: HolidayRepository){}

  async create(createHolidayDto: HolidayDto): Promise<IHoliday> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.holidayRepository);
      return await createOperation.process(createHolidayDto);
    } catch(error) {
      if(error.status == 409) {
        throw new ConflictException(`holiday with date ${createHolidayDto.date} already exists`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  async findAll() {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.holidayRepository);
      return await findAllOperation.process();
    } catch(error) {
      throw new InternalServerErrorException('something went wrong please try again');
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }

  async findHolidaysByMonth(firstDay: Date, lastDay: Date): Promise<IHoliday[]> {
    let query = this.holidayRepository.createQueryBuilder("holiday");
    query = query.where("holiday.date BETWEEN :firstday AND :lastday", { firstday: firstDay, lastday: lastDay});
    query = query.orderBy("holiday.date", "ASC");
    const results = await query.execute();
    return results;
  }

<<<<<<< HEAD
  async update(id: number, holidayDto: HolidayDto): Promise<IHoliday> {
    try {
      const holiday = await this.holidayRepository.findOne(id);
      if(!holiday) {
        throw new NotFoundException(`holiday not found`);
      }
      Object.assign(holiday, holidayDto);
      if(holiday.hid != id) {
        throw new BadRequestException('cannot update the hid property');
      }
      return await holiday.save();
    } catch(error) {
      throw new InternalServerErrorException('Unable to update employee,try again!');
=======
  async update(id: number, updateHolidayDto: HolidayDto) {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.holidayRepository);
      return await updateOperation.process(updateHolidayDto, id, 'hid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('holiday resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }

  async remove(id: number) {
    try {
<<<<<<< HEAD
      const holiday = await this.holidayRepository.findOne(id);
      if(!holiday) {
        throw new NotFoundException(`holiday not found`);
      }
      this.holidayRepository.remove(holiday);
    } catch(error) {
      throw new InternalServerErrorException('Unable to update employee,try again!');
=======
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.holidayRepository);
      return await removeOperation.process(id, 'empid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('holiday resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
    }
  }
}
