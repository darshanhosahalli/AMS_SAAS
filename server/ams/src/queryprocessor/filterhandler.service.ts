import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { Injectable, Scope } from "@nestjs/common";
import { QueryDecorator } from "./abstractquery.decorator";
import { Query } from "./query";

/**
 * Decorator for filtering the query results
 */
@Injectable({ scope: Scope.REQUEST })
export class FilterQueryDecorator<T extends BaseEntity> extends QueryDecorator<T>{

    /**
     * filter the query results by a condition
     * @param query
     * @returns the modified query with filter conditions
     */
    public execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T> {
        const constraints = queryObj.getFilters();
        let keys = Object.keys(constraints);
        keys = keys.filter((item) => {
            return !["sort", "limit", "page", "fields"].includes(item);
        });
        let index = 0;
        keys.forEach((key) => {
            const constraint = `{ "${key}" : "${constraints[key]}" }`;
            if(index == 0) {
                query = query.where(`entity.${key}= :${key}`,JSON.parse(constraint));
                index = index + 1;
            } else {
                query = query.andWhere(`entity.${key}= :${key}`,JSON.parse(constraint));
            }
        });
        return query;
    }
}