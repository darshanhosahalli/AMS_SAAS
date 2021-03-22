import { Controller, Get, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentDto } from './dto/department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(@Inject() private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() createDepartmentDto: DepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: DepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
