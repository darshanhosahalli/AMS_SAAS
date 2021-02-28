import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { QueryprocessorModule } from './queryprocessor/queryprocessor.module';
import { CrudfactoryModule } from './crudfactory/crudfactory.module';
import { DepartmentsModule } from './departments/departments.module';
import { HolidaysModule } from './holidays/holidays.module';
import { LeavesModule } from './leaves/leaves.module';
import { AttendancesModule } from './attendances/attendances.module';
import { ProjectsModule } from './projects/projects.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [EmployeesModule, QueryprocessorModule, CrudfactoryModule, DepartmentsModule, HolidaysModule, LeavesModule, AttendancesModule, ProjectsModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
