import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentRepository } from './department.repository';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository]), CrudfactoryModule],
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
