import { EmployeeEntity } from "./entities/employee.entity";
import { Repository, EntityRepository } from "typeorm";

/**
 * Employee Repository
 */
@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {

}