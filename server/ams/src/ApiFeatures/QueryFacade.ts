import { Repository, BaseEntity } from "typeorm";
import { BaseHandler } from "./BaseHandler";

export class QueryFacade<T extends BaseEntity> {
    public async getResults(entityRepository: Repository<T>, queryObj: any): Promise<T[]> {
        const query = entityRepository.createQueryBuilder("entity");
        const handleQuery = new BaseHandler<T>(queryObj);
        const results = await handleQuery.execute(query).execute();
        return results;
    }
}