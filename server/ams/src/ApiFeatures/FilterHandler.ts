import { SelectQueryBuilder, BaseEntity } from "typeorm";
import {  QueryDecorator } from "./Handler";

/**
 * Decorator for filtering the query results
 */
export class FilterQueryDecorator<T extends BaseEntity> extends QueryDecorator<T>{

    /**
     * filter the query results by a condition
     * @param query
     * @returns the modified query with filter conditions
     */
    public execute(query: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
        let keys = Object.keys(this.queryObj);
        keys = keys.filter((item) => {
            return !["sort", "limit", "page", "fields"].includes(item);
        });
        let index = 0;
        keys.forEach((key) => {
            const constraint = `{ "${key}" : "${this.queryObj[key]}" }`;
            if(index == 0) {
                query = query.where(`entity.${key}= :${key}`,JSON.parse(constraint));
                index = index + 1;
            } else {
                query = query.andWhere(`entity.${key}= :${key}`,JSON.parse(constraint));
            }
            this.removeAttribute(key);
        });
        return query;
    }
}