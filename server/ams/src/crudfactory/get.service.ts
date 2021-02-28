import { Injectable, Scope } from "@nestjs/common";
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
     */
    process(queryObj: any) {
        return "get all the an employee"
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
     */
    process(id: any) {
        return "get one employee"
    }
    
}