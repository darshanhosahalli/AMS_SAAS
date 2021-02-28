import { Injectable, Scope } from "@nestjs/common";
import { BaseEntity, Repository } from "typeorm";
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
     */
    process(queryObj: any) {
        return "created a new employee"
    }
    
}