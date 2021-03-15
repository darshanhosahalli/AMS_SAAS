import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { IVendor } from "../interface/vendor.interface";

/**
 * Entity class for employee
 */
 @Entity()
export class Vendor extends BaseEntity implements IVendor {

    /**
    * @primarykey
    * vendor id
    */
    @PrimaryGeneratedColumn()
    readonly vid: number;

    /**
    * @column
    * vendor name
    */
    @Index()
    @Column({
        type: "varchar",
        length: 150,
    })
    readonly name: string;

    /**
    * @column
    * vendor address
    */
     @Index()
     @Column({
        type: "varchar",
        length: 150,
     })
    readonly address: string;
    
    /**
    * @column
    * vendor number
    */
     @Index()
     @Column({
        type: "varchar",
        length: 150,
     })
    phone: number;
}
