import { Repository, EntityRepository } from "typeorm";
import { Vendor } from "./entities/vendor.entity";

/**
 * Vendor Repository
 */
@EntityRepository(Vendor)
export class VendorRepository extends Repository<Vendor> {

}