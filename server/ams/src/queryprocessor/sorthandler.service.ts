import { BaseEntity, SelectQueryBuilder } from "typeorm";
import { Injectable, Scope } from "@nestjs/common";
import { QueryDecorator } from "./abstractquery.decorator";
import { Query } from "./query";

/**
 * Decorator for sorting the query results
 */
@Injectable({ scope: Scope.REQUEST })
export class SortQueryDecorator<T extends BaseEntity> extends QueryDecorator<T> {

    /**
     * sort the query results by a condition
     * @param query
     * @returns - the modified query with sort results
     */
    public execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T>{
        const sortConditions = queryObj.getSortConditions();
        let index = 0;
        for(let i=0; i<sortConditions.length; i++) {
            const condition = sortConditions[i];
            if(condition.includes(".")) {
                const constraint = condition.split(".")[0];
                const ordering = condition.split(".")[1] == "ASC"? "ASC" : "DESC";
                if(index == 0) {
                    query = query.orderBy(`Entity.${constraint}`, ordering);
                    index++;
                } else {
                    query = query.addOrderBy(`Entity.${constraint}`, ordering);
                }
            } else {
                if(index == 0) {
                    query = query.orderBy(condition);
                    index++;
                } else {
                    query = query.addOrderBy(condition);
                }
            }
        }
        return query;
    }
}