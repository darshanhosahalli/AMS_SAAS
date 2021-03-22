import { Injectable, Scope, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { BaseEntity, Repository, DeepPartial, InsertQueryBuilder } from "typeorm";
import { Operation } from "./interface/operations.interface";

/**
 * Concrete Element class for create strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class CreateRecord<T extends BaseEntity> implements Operation<T> {

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
     * create a new query object and return
     * @param queryObj
     * @throws conflict exception, internal server exception
     * @returns the newly created object
     */
    async process(queryObj: DeepPartial<T>): Promise<T> {
        try {
            const query: InsertQueryBuilder<T> = this.repository.createQueryBuilder()
                                             .insert()
                                             .values(Object.assign({},queryObj));
            const result = await query.execute();
            return await this.repository.findOne(result.identifiers[0]);
        } catch(error) {
            if(error.code == '23505') {
                throw new ConflictException()
            }
            throw new InternalServerErrorException();
        }
    }
}