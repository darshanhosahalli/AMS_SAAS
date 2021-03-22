import { BaseEntity, SelectQueryBuilder } from "typeorm";
import { Scope, Injectable } from "@nestjs/common";
import { QueryDecorator } from "./abstractquery.decorator";
import { Query } from "./query";

/**
 * Decorator for selecting the fields in a query
 */
@Injectable({ scope: Scope.REQUEST })
export class FieldsQueryDecorator<T extends BaseEntity> extends QueryDecorator<T>{

    /**
     * Limit fields in the query to be selected
     * @param query
     * @param queryFields 
     * @returns the modified query with fields conditions
     */
    public execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T> {
        const fields = queryObj.getFields();
        for(let i=0; i< fields.length; i++) {
            const selectCondition = `"entity"."${fields[i]}" AS "${fields[i]}"`;
            if(i == 0) {
                query = query.select(selectCondition);
            }
            query = query.addSelect(selectCondition);
        }
        return query;
    }
}