import { Injectable, InternalServerErrorException, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { HolidayDto } from './dto/create-holiday.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './Holiday.Repository';
import { IHoliday } from './interfaces/IHoliday';

@Injectable()
export class HolidaysService {

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
    }
  }

  async findHolidaysByMonth(firstDay: Date, lastDay: Date): Promise<IHoliday[]> {
    let query = this.holidayRepository.createQueryBuilder("holiday");
    query = query.where("holiday.date BETWEEN :firstday AND :lastday", { firstday: firstDay, lastday: lastDay});
    query = query.orderBy("holiday.date", "ASC");
    const results = await query.execute();
    return results;
  }

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
    }
  }

  async remove(id: number) {
    try {
      const holiday = await this.holidayRepository.findOne(id);
      if(!holiday) {
        throw new NotFoundException(`holiday not found`);
      }
      this.holidayRepository.remove(holiday);
    } catch(error) {
      throw new InternalServerErrorException('Unable to update employee,try again!');
    }
  }
}
