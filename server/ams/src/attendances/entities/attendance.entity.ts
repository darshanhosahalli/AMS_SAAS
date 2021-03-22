import { BaseEntity, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { IAttendance } from "../interface/attendance.interface";

/**
 * Entity class for Attendance
 */
@Entity()
@Index(["date", "empid"], { unique: true })
export class Attendance extends BaseEntity implements IAttendance {

    /**
    * @primarykey
    * attendance id
    */
    @PrimaryGeneratedColumn()
    aid: number;

     /**
     * @column
     * date
     */
    @Index()
    @Column({
        type: Date,
    })
    date: Date;

    /**
    * @Forigenkey
    * Employee id
    */
    @Column({
        type: "varchar",
        length: 150,
        unique: true,
        update: false,
    })
    empid: string;

    /**
     * @Forigenkey
     * Project id
     */
     @Column({
        type: "varchar",
        length: 150,
        unique: true,
        update: false,
    })
    projectid: string;
}