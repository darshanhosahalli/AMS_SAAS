import { Repository, EntityRepository } from "typeorm";
import { Attendance } from "./entities/attendance.entity";

/**
 * Attendance Repository
 */
@EntityRepository(Attendance)
export class AttendanceRepository extends Repository<Attendance> {

}