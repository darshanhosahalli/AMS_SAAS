import { Operation } from "./operation.interface";
import { BaseEntity, Repository } from "typeorm";
import { QueryFacade } from "src/ApiFeatures/QueryFacade";
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST})
export class GetOneOperation<T extends BaseEntity> implements Operation<T> {
    constructor(private id: string){};
    async accept(repository: Repository<T>): Promise<T>{
        try {
            return await repository.findOne(this.id);
        } catch(error) {
            console.log(error);
        }
    }
}

@Injectable({ scope: Scope.REQUEST})
export class GetAllOperation<T extends BaseEntity> implements Operation<T> {
    constructor(private queryString){};
    async accept(repository: Repository<T>): Promise<T[]>{
        const queryFacade = new QueryFacade<T>();
        const results = await queryFacade.getResults(repository, this.queryString);
        return results;
    }
}