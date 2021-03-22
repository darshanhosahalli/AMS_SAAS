import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayDto } from './dto/create-holiday.dto';

@Controller('/v1/holidays')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createHolidayDto: HolidayDto) {
    console.log(createHolidayDto);
    return this.holidaysService.create(createHolidayDto);
  }

  @Get()
  findAll() {
    return this.holidaysService.findAll();
  }

  @Get('/month/:month')
  findHolidaysByMonth(@Param('month') month: number) {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), month - 1, 1);
    var lastDay = new Date(date.getFullYear(), month, 0);
    return this.holidaysService.findHolidaysByMonth(firstDay, lastDay);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateHolidayDto: HolidayDto) {
    return this.holidaysService.update(+id, updateHolidayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holidaysService.remove(+id);
  }
}
