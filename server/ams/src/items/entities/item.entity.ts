import { ITems } from "../iterfaces/items.interface";
import { Entity, BaseEntity, PrimaryColumn, Column, Index } from "typeorm";

/**
 * Entity class for Items 
 */
@Entity()
export class ItemsEntity extends BaseEntity implements ITems{

    /**
     * items hsn
     * @Primary column
     */
    @PrimaryColumn({
        type: "varchar",
        length: 150,
        unique: true,
        update: false,
    })
    hsn: string;

    /**
     * Item name
     * @Index
     */
    @Index()
    @Column({
        type: "varchar",
        length: 150,
    })
    name: string;

    /**
     * @Column
     * item cost
     */
    @Column({
        type: "int",
    })
    cost: number;

    /**
     * @Column
     * item quantity in stock
     */
    @Column({
        type: "int",
    })
    quantity: number;

    /**
     * @Column
     * items category
     */
    @Index()
    @Column({
        type: "int",
    })
    icid: number;
}
