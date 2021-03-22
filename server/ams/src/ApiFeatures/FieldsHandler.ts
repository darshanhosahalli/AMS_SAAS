import { BaseEntity, SelectQueryBuilder } from "typeorm";
import { QueryDecorator } from "./Handler";

/**
 * Decorator for selecting the fields in a query
 */
export class FieldsQueryDecorator<T extends BaseEntity> extends QueryDecorator<T>{

    /**
     * Limit fields in the query to be selected
     * @param query
     * @param queryFields 
     * @returns the modified query with fields conditions
     */
    public execute(query: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
        console.log(`initial query : ${query.getQuery()}`);
        const fields = this.queryObj.fields.split(',');
        for(let i=0; i< fields.length; i++) {
            const selectCondition = `"entity"."${fields[i]}" AS "${fields[i]}"`;
            if(i == 0) {
                query = query.select(selectCondition);
            }
            query = query.addSelect(selectCondition);
        }
        this.removeAttribute("fields");
        console.log(`final query : ${query.getQuery()}`);
        return query;
    }
}