import { BaseEntity, Repository } from "typeorm";

export interface Operation<T> {
    accept(repository: Repository<T>);
}