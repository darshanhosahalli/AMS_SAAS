<<<<<<< HEAD
import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayDto } from './dto/create-holiday.dto';

@Controller('/v1/holidays')
=======
import { Controller, Get, Post, Body, Put, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayDto } from './dto/holiday.dto';

@Controller('holidays')
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createHolidayDto: HolidayDto) {
<<<<<<< HEAD
    console.log(createHolidayDto);
=======
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
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

<<<<<<< HEAD
  @Put(':id')
=======
  @Patch(':id')
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateHolidayDto: HolidayDto) {
    return this.holidaysService.update(+id, updateHolidayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holidaysService.remove(+id);
  }
}
