import { SelectQueryBuilder, BaseEntity } from "typeorm";
import { Injectable, Scope, Inject } from "@nestjs/common";
import { QueryDecorator } from "./abstractquery.decorator";
import { FieldsQueryDecorator } from "./fieldshandler.service";
import { SortQueryDecorator } from "./sorthandler.service";
import { FilterQueryDecorator } from "./filterhandler.service";
import { PaginateQueryDecorator } from "./paginate.service";
import { Query } from "./query";

@Injectable({ scope: Scope.REQUEST })
export class BaseHandler<T extends BaseEntity> extends QueryDecorator<T> {

    @Inject(FieldsQueryDecorator)
    private fieldsQueryDecorator: FieldsQueryDecorator<T>;

    @Inject(SortQueryDecorator)
    private sortQueryDecorator: SortQueryDecorator<T>;

    @Inject(FilterQueryDecorator)
    private filterQueryDecorator: FilterQueryDecorator<T>;

    @Inject(PaginateQueryDecorator)
    private paginateQueryDecorator: PaginateQueryDecorator<T>;

    public execute(query: SelectQueryBuilder<T>, queryObj: Query): SelectQueryBuilder<T>  {
        query = query.select("*");
        while(Object.keys(queryObj.getQueryObj()).length > 0) {
            const conditions = queryObj.getQueryObj();
            switch(true) {
                case "fields" in conditions:
                    query = this.fieldsQueryDecorator.execute(query, queryObj);
                    break;
                case "sort" in conditions:
                    query = this.sortQueryDecorator.execute(query, queryObj);
                    break;
                case "page" in conditions || "limit" in conditions:
                    query = this.paginateQueryDecorator.execute(query, queryObj)
                default: 
                    query = this.filterQueryDecorator.execute(query, queryObj);
                    break;
            }
        }
        return query
    }
}