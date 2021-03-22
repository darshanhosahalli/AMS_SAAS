import { TypeOrmModuleOptions } from '@nestjs/typeorm';
<<<<<<< HEAD
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { UserEntity } from 'src/auth/entities/auth.entity';
import { Holiday } from 'src/holidays/entities/holiday.entity';
import { DepartmentEntity } from 'src/departments/entities/department.entity';
=======
import { EmployeeEntity } from 'src/employees/entities/employee.entity';
import { ProjectEntity } from 'src/projects/entities/project.entity';
import { Holiday } from 'src/holidays/entities/holiday.entity';
import { DepartmentEntity } from 'src/departments/entities/department.entity';
import { ItemsEntity } from 'src/items/entities/item.entity';
import { Attendance } from 'src/attendances/entities/attendance.entity';
import { Vendor } from 'src/vendor/entities/vendor.entity';
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'AMS',
<<<<<<< HEAD
  entities: [EmployeeEntity, UserEntity, Holiday, DepartmentEntity],
  synchronize: true,
};
=======
  entities: [EmployeeEntity, ProjectEntity, Holiday, DepartmentEntity, ItemsEntity, Attendance, Vendor],
  synchronize: true,
}
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
