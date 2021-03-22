import { Repository, EntityRepository } from "typeorm";
import { DepartmentEntity } from "./entities/department.entity";
import { DepartmentDto } from "./dto/department.dto";
import { IDepartment } from "./interface/IDepartment";

@EntityRepository(DepartmentEntity)
export class DepartmentRepository extends Repository<DepartmentEntity> {
    async createDepartment(createDepartmentDto: DepartmentDto): Promise<IDepartment> {
        const department = new DepartmentEntity();
        Object.assign(department, createDepartmentDto);
        return await department.save();
    }
}