import { Injectable, Scope, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { BaseEntity, Repository } from "typeorm";
import { Operation } from "./interface/operations.interface";

/**
 * Concrete Element class for get strategy
 */
@Injectable({ scope: Scope.REQUEST})
export class GetRecords<T extends BaseEntity> implements Operation<T> {

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
    async process(queryObj: any): Promise<T[]> {
        return await this.repository.find();
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