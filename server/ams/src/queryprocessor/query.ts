import { Injectable, Scope } from "@nestjs/common";


export interface Ipagination {
    page?: number;
    limit?: number;
}

/**
 * Query visitor class
 */
@Injectable({ scope: Scope.REQUEST})
export class Query {
    private queryObj;

    /**
     * set the query object
     * @param queryObj
     */
    public setQueryObj(queryObj: Object) {
        this.queryObj = queryObj;
    }

    /**
     * get the query object
     */
    public getQueryObj() {
        return this.queryObj;
    }

    /**
     * get the fields after removing from the query object
     */
    public getFields(): string[] {
        const fields: string[] = this.queryObj.fields.split(',');
        delete this.queryObj.fields;
        return fields
    }

    /**
     * get the sort conditions removing from the query object
     */
    public getSortConditions(): string[] {
        const sortConditions = this.queryObj.sort.split(',');
        delete this.queryObj.sort;
        return sortConditions;
    }

    /**
     * get the page conditions removing from the query object
     */
    public getPageConstraints(): Ipagination {
        let constrainst = new Object();
        if("page" in this.queryObj) {
            constrainst["page"] = parseInt(this.queryObj.page);
            delete this.queryObj.page;
        }
        if("limit" in this.queryObj) {
            constrainst["limit"] = parseInt(this.queryObj.limit);
            delete this.queryObj.limit;
        }
        return constrainst;
    }

    /**
     * get the filters conditions removing from the query object
     */
    public getFilters(): Object {
        let keys = Object.keys(this.queryObj);
        keys = keys.filter((item) => {
            return !["sort", "limit", "page", "fields"].includes(item);
        });
        let constraints = new Object();
        keys.forEach(key => {
            constraints[key] = this.queryObj[key];
            delete this.queryObj[key];
        });
        return constraints;
    }

}