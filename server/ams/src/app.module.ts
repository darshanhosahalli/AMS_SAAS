import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
