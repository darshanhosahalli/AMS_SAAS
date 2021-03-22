<<<<<<< HEAD
import { Controller, Get, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentDto } from './dto/department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(@Inject() private readonly departmentsService: DepartmentsService) {}

  @Post()
=======
import { Controller, Get, Post, Body, Put, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentDto } from './dto/department.dto';

/**
 * Api Endpoints for CRUD operations on department module
 */
@Controller('/v1/departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @UsePipes(ValidationPipe)
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
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

<<<<<<< HEAD
  @Put(':id')
=======
  @Patch(':id')
  @UsePipes(ValidationPipe)
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
  update(@Param('id') id: string, @Body() updateDepartmentDto: DepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
