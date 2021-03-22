import { Repository, EntityRepository } from "typeorm";
import { Holiday } from "./entities/holiday.entity";
import { HolidayDto } from "./dto/create-holiday.dto";
import { IHoliday } from "./interfaces/IHoliday";

@EntityRepository(Holiday)
export class HolidayRepository extends Repository<Holiday> {
    async createHoliday(holidayDto: HolidayDto): Promise<IHoliday> {
        const holiday = new Holiday();
        Object.assign(holiday, holidayDto);
        return await holiday.save();
    }
}