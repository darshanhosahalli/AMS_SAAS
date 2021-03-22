import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { Query } from "./query";

/**
 * Abstract super class for decorating query
 */
export abstract class QueryDecorator<T extends BaseEntity> {

    /**
     * create an abstract query selector
     * @param query
     */
    abstract execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T>;
}