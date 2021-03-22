import { QueryDecorator } from "./Handler";
import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { FieldsQueryDecorator } from "./FieldsHandler";
import { SortQueryDecorator } from "./SortHandler";
import { FilterQueryDecorator } from "./FilterHandler";
import { PaginateQueryDecorator } from "./Paginate";

export class BaseHandler<T extends BaseEntity> extends QueryDecorator<T> {
    
    constructor(queryObj: any) {
        super(queryObj);
    }

    public execute(query: SelectQueryBuilder<T>): SelectQueryBuilder<T>  {
        switch(true) {
            case "fields" in this.queryObj:
                query = (new FieldsQueryDecorator<T>(this.queryObj)).execute(query);
                break;
            case !("fields" in this.queryObj):
                query = query.select("*");
                break;
            case "sort" in this.queryObj:
                query = (new SortQueryDecorator<T>(this.queryObj)).execute(query);
                break;
            default: 
                query = (new FilterQueryDecorator<T>(this.queryObj)).execute(query);
                break;
        }
        return (new PaginateQueryDecorator<T>(this.queryObj)).execute(query);
    }
}