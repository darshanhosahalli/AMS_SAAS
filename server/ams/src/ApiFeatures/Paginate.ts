import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { QueryDecorator } from "./Handler";

/**
 * Paginate Queries 
 */
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
    public execute(query: SelectQueryBuilder<T>): SelectQueryBuilder<T> {
        if("page" in this.queryObj) {
            this.page = this.queryObj.page;
            this.removeAttribute("page");
        }
        if("limit" in this.queryObj) {
            this.limit = this.queryObj.limit;
            this.removeAttribute("limit");
        }
        const skip = this.limit*(this.page-1);
        query.offset(skip).limit(this.limit);
        return query;
    }
}