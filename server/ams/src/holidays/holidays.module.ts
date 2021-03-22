import { Module } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidaysController } from './holidays.controller';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayRepository } from './Holiday.Repository';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository])],
=======
import { HolidayRepository } from './holiday.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository]), CrudfactoryModule],
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
  controllers: [HolidaysController],
  providers: [HolidaysService]
})
export class HolidaysModule {}
