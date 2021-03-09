import { Injectable, Inject, ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CrudfactoryService } from 'src/crudfactory/crudfactory.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectsRepository } from './projects.repository';
import { IProjects } from './interface/projects.interface';
import { OperationsEnum } from 'src/crudfactory/enums/operations.enum';
import { ProjectEntity } from './entities/project.entity';

/**
 * Service class for CRUD operations of projects module
 */
@Injectable()
export class ProjectsService {

  @Inject(CrudfactoryService)
  private crudfactoryService: CrudfactoryService<ProjectEntity>;

  constructor(@InjectRepository(ProjectsRepository) private projectsRepository: ProjectsRepository){}

  /**
   * Creates a new project
   * @throws conflict exception
   * @param createProjectDto
   */
  async create(createProjectDto: CreateProjectDto): Promise<IProjects> {
    try {
      const createOperation = this.crudfactoryService.getOperation(OperationsEnum.Create);
      createOperation.accept(this.projectsRepository);
      return await createOperation.process(createProjectDto);
    } catch(error) {
      if(error.status == 409) {
        throw new ConflictException(`project of id ${createProjectDto.projectid} already exists`)
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * fetch all the projects
   * @returns - all the projects
   */
  async findAll(queryObj: any): Promise<IProjects[]> {
    try {
      const findAllOperation = this.crudfactoryService.getOperation(OperationsEnum.Get);
      findAllOperation.accept(this.projectsRepository);
      return await findAllOperation.process(queryObj);
    } catch(error) {
      console.log(error);
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Fetch a project by id
   * @param id
   * @returns - project by id
   */
  async findOne(id: string): Promise<IProjects> {
    try {
      const findOneOperation = this.crudfactoryService.getOperation(OperationsEnum.GetOne);
      findOneOperation.accept(this.projectsRepository);
      return await findOneOperation.process(id);
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('project not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Update the projects by id
   * @param id
   * @param updateEmployeeDto 
   * @returns - updated project by id
   */
  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const updateOperation = this.crudfactoryService.getOperation(OperationsEnum.Update);
      updateOperation.accept(this.projectsRepository);
      return await updateOperation.process(updateProjectDto, id, 'projectid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('project not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }

  /**
   * Deletes a project specified by id
   * @param id
   * @throws Not found Exception
   * @throws Internal server exception
   */
  async remove(id: number) {
    try {
      const removeOperation = this.crudfactoryService.getOperation(OperationsEnum.Delete);
      removeOperation.accept(this.projectsRepository);
      return await removeOperation.process(id, 'empid');
    } catch(error) {
      if(error.status = 404) {
        throw new NotFoundException('employee resource not found');
      }
      throw new InternalServerErrorException('something went wrong please try again');
    }
  }
}
