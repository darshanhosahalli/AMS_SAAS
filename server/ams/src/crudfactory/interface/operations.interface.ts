import { BaseEntity, Repository } from "typeorm";

/**Used as a part of Stategy pattern
 * Generic interface for CRUD operation
 */
export interface Operation<T extends BaseEntity> {
    /**
     * Accept repository visitor
     * @param repository
     */
    accept(repository: Repository<T>);

    /**
     * Process the query with optional paramters
     * @param queryObj
     * @param id
     */
    process(queryObj?, id?, columnName?)
}