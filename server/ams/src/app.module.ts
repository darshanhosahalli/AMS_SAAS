import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { HolidaysModule } from './holidays/holidays.module';
import { DepartmentsModule } from './departments/departments.module';
import { CRUDFactory } from './CRUDFactory/CRUDFactory';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, EmployeeModule, HolidaysModule, DepartmentsModule, CRUDFactory, CrudModule],
=======
import { EmployeesModule } from './employees/employees.module';
import { QueryprocessorModule } from './queryprocessor/queryprocessor.module';
import { CrudfactoryModule } from './crudfactory/crudfactory.module';
import { DepartmentsModule } from './departments/departments.module';
import { HolidaysModule } from './holidays/holidays.module';
import { LeavesModule } from './leaves/leaves.module';
import { AttendancesModule } from './attendances/attendances.module';
import { ProjectsModule } from './projects/projects.module';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), EmployeesModule, QueryprocessorModule, CrudfactoryModule, DepartmentsModule, HolidaysModule, LeavesModule, AttendancesModule, ProjectsModule, ItemsModule, VendorModule],
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
