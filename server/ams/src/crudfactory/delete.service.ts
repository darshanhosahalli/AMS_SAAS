import { Injectable, Scope } from "@nestjs/common";
import { BaseEntity, Repository } from "typeorm";
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
     * @param id 
     */
    process(id: any) {
        return "deleted an employee"
    }
    
}