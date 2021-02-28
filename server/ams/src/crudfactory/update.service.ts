import { Injectable, Scope } from "@nestjs/common";
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
     * @param id 
     */
    process(queryObj: any, id: any) {
        return "updated an employee"
    }
    
}