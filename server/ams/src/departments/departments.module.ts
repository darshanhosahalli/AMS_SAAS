import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { DepartmentRepository } from './Department.Repository';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository])],
=======
import { DepartmentRepository } from './department.repository';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository]), CrudfactoryModule],
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
  controllers: [DepartmentsController],
  providers: [DepartmentsService]
})
export class DepartmentsModule {}
