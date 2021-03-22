import { SelectQueryBuilder, BaseEntity } from "typeorm";

/**
 * Abstract super class for decorating query
 */
export abstract class QueryDecorator<T extends BaseEntity> {
    /**
     * query obj
     */
    protected queryObj: any;

    /**
     * constructor assigns the query object
     * @param queryObj
     */
    constructor(queryObj: any) {
        this.queryObj = queryObj;
    }

    /**
     * removes the unwanted query attribute
     * @param key
     */
    protected removeAttribute(key: string) {
        delete this.queryObj[key];
    }

    abstract execute(query: SelectQueryBuilder<T>): SelectQueryBuilder<T>;
}