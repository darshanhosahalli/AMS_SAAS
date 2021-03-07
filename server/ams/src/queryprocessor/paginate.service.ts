import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { Injectable, Scope } from "@nestjs/common";
import { QueryDecorator } from "./abstractquery.decorator";
import { Query } from "./query";

/**
 * Paginate Queries 
 */
@Injectable({ scope: Scope.REQUEST })
export class PaginateQueryDecorator<T extends BaseEntity> extends QueryDecorator<T> {

    /**
     * page number
     */
    private page = 1;

    /**
     * limiting the number of records
     */
    private limit = 25;

    /**
     * decorate the query object to paginate records
     * @param query
     * @param queryObj
     */
    public execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T> {
        const condition = queryObj.getPageConstraints();
        if("page" in condition) {
            this.page = condition.page;
        }
        if("limit" in condition) {
            this.limit = condition.limit;
        }
        const skip = this.limit*(this.page-1);
        query.offset(skip).limit(this.limit);
        return query;
    }
}