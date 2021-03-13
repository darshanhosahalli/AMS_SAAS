import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employees/entities/employee.entity';
import { ProjectEntity } from 'src/projects/entities/project.entity';
import { Holiday } from 'src/holidays/entities/holiday.entity';
import { DepartmentEntity } from 'src/departments/entities/department.entity';
import { ItemsEntity } from 'src/items/entities/item.entity';
import { Attendance } from 'src/attendances/entities/attendance.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'AMS',
  entities: [EmployeeEntity, ProjectEntity, Holiday, DepartmentEntity, ItemsEntity, Attendance],
  synchronize: true,
}