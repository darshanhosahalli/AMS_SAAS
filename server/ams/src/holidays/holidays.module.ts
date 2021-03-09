import { Module } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidaysController } from './holidays.controller';
import { HolidayRepository } from './holiday.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudfactoryModule } from 'src/crudfactory/crudfactory.module';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository]), CrudfactoryModule],
  controllers: [HolidaysController],
  providers: [HolidaysService]
})
export class HolidaysModule {}
