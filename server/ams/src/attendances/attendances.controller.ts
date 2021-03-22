import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe, Query, HttpCode } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

/**
 * Api End point for Attendance module
 */
@Controller('/v1/attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

   /**
   * Function to add attendance to employee
   * @param createAttendanceDto
   * @returns - the added attendance
   */
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendancesService.create(createAttendanceDto);
  }

  /**
   * Function to get all attendance of employee
   * @param queryObj
   * @returns - all the attendance
   */
  @Get()
  findAll(@Query() queryObj) {
    return this.attendancesService.findAll(queryObj);
  }

  /**
   * update the attendance
   * @param id
   * @param updateAttendanceDto
   * @returns - returns the updated attedance
   */
  @Put(':id')
  update(@Param('id') id: number, @Body() updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendancesService.update(id, updateAttendanceDto);
  }

  /**
   * delete a particular attendance
   * @param id
   */
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.attendancesService.remove(id);
  }
}
