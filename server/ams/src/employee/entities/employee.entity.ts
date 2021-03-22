import { Entity, PrimaryColumn, Column, OneToMany, BaseEntity, Index } from "typeorm";
import { Designations } from "../dto/create-employee.dto";
import { IEmployee } from "../interface/IEmployee";

/**
 * Entity class for employee
 */
@Entity()
export class EmployeeEntity extends BaseEntity implements IEmployee{
    /**
    * @primarykey
    * Employee id
    */
    @PrimaryColumn({
        type: "varchar",
        length: 150,
        unique: true,
        update: false,
    })
    empId: string;

    /**
     * @column
     * Employee name
     */
    @Index()
    @Column({
        type: "varchar",
        length: 150,
    })
    name: string;

    /**
     * @Column
     * Employee age
     */
    @Column({
        type: "int",
    })
    age: number;

    /**
     * @Column
     * Employee phone number
     */
    @Column({
        type: "varchar",
        length: 10
    })
    phone: string;

    /**
     * @Column
     * Employee designation
     */
    @Index()
    @Column({
        type: "varchar",
        enum: Designations,
        default: Designations.ASSOCIATE
    })
    designation: Designations;

    /**
     * @Column
     * Employee Salary
     */
    @Column({
        type: "int",
    })
    salary: number;

    /**
     * @Column
     * Employee photo
     */
    @Column({
        type: "varchar",
        length: 150,
        nullable: true,
    })
    photo: string;
}
