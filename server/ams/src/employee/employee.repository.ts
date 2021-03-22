import { EmployeeEntity } from "./entities/employee.entity";
import { Repository, EntityRepository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { InternalServerErrorException, ConflictException } from "@nestjs/common";

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
    async createEmployee(createEmployeeDto: CreateEmployeeDto) {
        const employee = new EmployeeEntity();
        Object.assign(employee, createEmployeeDto);
        return await employee.save();
    }
}