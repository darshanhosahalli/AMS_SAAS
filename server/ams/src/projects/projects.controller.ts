import { Controller, Get, Post, Body, Put, Param, Delete, Query, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

/**
 * Api End point for projects module
 */
@Controller('/v1/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  /**
   * Function to create a new Projects
   * @param createProjectDto
   * @returns - the newly created project
   */
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  /**
   * Function to return all the projects
   * @param queryObj
   * @returns - the the projects by query
   */
  @Get()
  findAll(@Query() queryObj) {
    return this.projectsService.findAll(queryObj);
  }

  /**
   * Function to return all the project specified by id
   * @param id
   * @returns - project by id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  /**
   * Function to update an project with the specified id
   * @param id
   * @param updateProjectDto
   * @returns - the updated project
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  /**
   * Deletes the project specified by id
   * @param id
   */
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
