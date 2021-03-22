import { Injectable, Scope, Inject } from '@nestjs/common';
import { Repository, BaseEntity } from 'typeorm';
import { BaseHandler } from './basehandler.service';
import { Query } from './query';

/**
 * Facade class for query processing
 */
@Injectable({ scope: Scope.REQUEST })
export class QueryprocessorService<T extends BaseEntity> {

    @Inject(BaseHandler)
    private baseHandler: BaseHandler<T>;

    @Inject(Query)
    private queryObj: Query;

    /**
     * Process query to handle sorting,
     * pagination,
     * filtering
     * searching
     * @param entityRepository
     * @param queryObj
     * @return - the query object
     */
    public async getResults(entityRepository: Repository<T>, queryObj: any): Promise<T[]> {
        const query = entityRepository.createQueryBuilder("entity");
        this.queryObj.setQueryObj(queryObj);
        const results = await this.baseHandler.execute(query, this.queryObj).execute();
        return results;
    }
}
