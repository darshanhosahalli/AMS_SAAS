import { Injectable, Scope, NotFoundException } from "@nestjs/common";
import { BaseEntity, Repository } from "typeorm";
import { Operation } from "./interface/operations.interface";

/**
 * Concrete Element class for update strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class UpdateRecord<T extends BaseEntity> implements Operation<T> {

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
     * update the record of id and return
     * @param queryObj
     * @throws not found exception
     * @param id 
     */
    async process(queryObj: any, id: any, columnName: string): Promise<T> {
        const update = this.repository.createQueryBuilder()
            .update()
            .set(queryObj)
            .where(`${columnName} = :columnId`, { columnId: id });     
        const result = await update.execute();
        if(result.affected == 0) {
            throw new NotFoundException();
        }
        return await this.repository.findOne(id);
    }
}