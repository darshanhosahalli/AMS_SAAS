import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employees/entities/employee.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'AMS',
  entities: [EmployeeEntity],
  synchronize: true,
};
