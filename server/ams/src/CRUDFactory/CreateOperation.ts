import { Operation } from "./operation.interface";
import { BaseEntity, Repository, DeepPartial } from "typeorm";
import { ConflictException, InternalServerErrorException, Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST})
export class CreateOperation<T extends BaseEntity> implements Operation<T>{

    constructor(private entity: DeepPartial<T>){};

    async accept(repository: Repository<T>): Promise<T> {
        try {
            return await repository.create(this.entity);
          } catch(error) {
            if(error.code == 23505) {
              throw new ConflictException("Employee with the Empid already exists");
            }
            throw new InternalServerErrorException("Someting went wrong please try again");
          }
    }
    
}