import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [CrudfactoryModule],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
