import { EntityRepository, Repository } from "typeorm";
import { Holiday } from "./entities/holiday.entity";

@EntityRepository(Holiday)
export class HolidayRepository extends Repository<Holiday> {
    
}