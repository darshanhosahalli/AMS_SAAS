import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';
import { AttendanceRepository } from './attendance.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceRepository]), CrudfactoryModule],
  controllers: [AttendancesController],
  providers: [AttendancesService]
})
export class AttendancesModule {}