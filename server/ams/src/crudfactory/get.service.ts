import { Injectable, Scope, InternalServerErrorException, NotFoundException, Inject } from "@nestjs/common";
import { BaseEntity, Repository } from "typeorm";
import { Operation } from "./interface/operations.interface";
import { QueryprocessorService } from "src/queryprocessor/queryprocessor.service";

/**
 * Concrete Element class for get strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class GetRecords<T extends BaseEntity> implements Operation<T> {

    @Inject(QueryprocessorService)
    private queryFacade: QueryprocessorService<T>;

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
     * get all the records satisfied by query
     * @param queryObj
     * @returns - list of all the records
     */
    async process(queryObj?: any): Promise<T[]> {
        const results = await this.queryFacade.getResults(this.repository, queryObj);
        return results;
    }
    
}

/**
 * Concrete Element class for getOne strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class GetOneRecords<T extends BaseEntity> implements Operation<T> {

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
     * get the reqcords satisfied by id
     * @param id
     * @throws not found exception
     * @returns - the record specified by id
     */
    async process(id: any): Promise<T> {
        const result = await this.repository.findOne(id);
        if(!result) {
            throw new NotFoundException();
        }
        return result;       
    }
    
}