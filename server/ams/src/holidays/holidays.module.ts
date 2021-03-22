import { Module } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidaysController } from './holidays.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayRepository } from './Holiday.Repository';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayRepository])],
  controllers: [HolidaysController],
  providers: [HolidaysService]
})
export class HolidaysModule {}
