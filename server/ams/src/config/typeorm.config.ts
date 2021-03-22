import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { UserEntity } from 'src/auth/entities/auth.entity';
import { Holiday } from 'src/holidays/entities/holiday.entity';
import { DepartmentEntity } from 'src/departments/entities/department.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'AMS',
  entities: [EmployeeEntity, UserEntity, Holiday, DepartmentEntity],
  synchronize: true,
};
