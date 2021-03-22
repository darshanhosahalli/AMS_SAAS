import { Repository, EntityRepository } from "typeorm";
import { ProjectEntity } from "./entities/project.entity";

/**
 * Projects Repository
 */
@EntityRepository(ProjectEntity)
export class ProjectsRepository extends Repository<ProjectEntity> {

}