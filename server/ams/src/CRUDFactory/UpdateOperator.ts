import { Operation } from "./operation.interface";
import { BaseEntity, Repository, DeepPartial, UpdateResult } from "typeorm";
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST})
export class UpdateOperation<T extends BaseEntity> implements Operation<T>{
    constructor(private entity: DeepPartial<T>, private id: string){}
    async accept(repository: Repository<T>): Promise<UpdateResult> {
        try {
            const query = repository.createQueryBuilder().update().set(this.entity).where("id = :id", { id : this.id });
            console.log(query.getQuery());
            return await query.execute();
        } catch(error) {
            console.log(error);
        }
    }
}