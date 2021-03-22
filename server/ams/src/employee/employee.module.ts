import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { CrudModule } from 'src/crud/crud.module';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository]), CrudModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
