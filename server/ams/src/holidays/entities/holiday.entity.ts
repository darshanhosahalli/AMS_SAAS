import { Entity, PrimaryGeneratedColumn, Index, Column, BaseEntity } from "typeorm";
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
}
