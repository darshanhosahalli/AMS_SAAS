import { Operation } from "./operation.interface";
import { BaseEntity, Repository } from "typeorm";
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST})
export class DeleteOperation<T extends BaseEntity> implements Operation<T>{
    constructor(private id: string) {};
    async accept(repository: Repository<T>): Promise<void> {
        try {
            const query = repository.createQueryBuilder().delete().where("id = :id", { id: this.id});
            console.log(query.getQuery());
            await query.execute();
        } catch(error) {
            console.log(error);
        }
    }
}