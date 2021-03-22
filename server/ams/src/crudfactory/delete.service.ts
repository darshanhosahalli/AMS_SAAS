import { Injectable, Scope, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { BaseEntity, Repository, DeleteQueryBuilder } from "typeorm";
import { Operation } from "./interface/operations.interface";

/**
 * Concrete Element class for delete strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class DeleteRecord<T extends BaseEntity> implements Operation<T> {

    /**
     * Visitor repository
     */
    private repository: Repository<T>

    /**
     * accept the repository
     * @param repository
     */
    accept(repository: Repository<T>) {
        this.repository = repository;
    }

    /**
     * delete the record of id
     * @throws - Not found exceptino
     * @param id 
     */
    async process(id: any, columnName: string): Promise<void> {
        const query: DeleteQueryBuilder<T> = await this.repository.createQueryBuilder().delete().where(`${columnName} = :columnId`, { columnId: id});
        const result = await query.execute();
        if(result.affected == 0) {
            throw new NotFoundException();
        }
    }
}