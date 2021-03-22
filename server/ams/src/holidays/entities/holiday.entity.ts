<<<<<<< HEAD
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index } from "typeorm";
=======
import { Entity, PrimaryGeneratedColumn, Index, Column, BaseEntity } from "typeorm";
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
import { IHoliday } from "../interfaces/IHoliday";

/**
 * Entity class for Holiday
 */
@Entity()
export class Holiday extends BaseEntity implements IHoliday{
    /**
    * @primarykey
    * Holiday id
    */
   @PrimaryGeneratedColumn()
<<<<<<< HEAD
    hid: number;

    /**
     * @Column
     * Holiday date
     */
    @Index()
    @Column({
        type: Date,
        unique: true
    })
    date: Date;

    /**
     * @Column
     * Holiday name
     * 
     */
    @Column({
        type: "varchar",
    })
    name: string
=======
   hid: number;

   /**
    * @Column
    * Holiday date
    */
   @Index()
   @Column({
       type: Date,
       unique: true
   })
   date: Date;

   /**
    * @Column
    * Holiday name
    * 
    */
   @Column({
       type: "varchar",
   })
   name: string
>>>>>>> e72c5da7755e86d4a43bce85e84c138dc8df53d2
}
