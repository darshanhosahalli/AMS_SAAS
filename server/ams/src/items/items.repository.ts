import { EntityRepository, Repository } from "typeorm";
import { ItemsEntity } from "./entities/item.entity";

/**
 * Items Repository
 */
@EntityRepository(ItemsEntity)
export class ItemsRepository extends Repository<ItemsEntity> {

}