import { Entity, BaseEntity, PrimaryColumn, Index, Column } from "typeorm";
import { IProjects } from "../interface/projects.interface";

/**
 * Entity class for projects
 */
@Entity()
export class ProjectEntity extends BaseEntity implements IProjects {
    /**
     * @Primarykey
     * Project id
     */
    @PrimaryColumn({
        type: "varchar",
        length: 150,
        unique: true,
        update: false,
    })
    projectid: string;

     /**
     * @column
     * project name
     */
    @Index()
    @Column({
        type: "varchar",
        length: 150,
    })
    name: string;

    /**
     * @Column
     * project location
     */
    @Column({
        type: "varchar",
        length: 150,
    })
    location: string;

    /**
     * @Column
     * project client name
     */
    @Column({
        type: "varchar",
        length: 150,
    })
    clientname: string;

    /**
     * @Column
     * project description
     */
    @Column({
        type: "varchar",
        length: 150,
    })
    description: string;

    /**
     * @Column
     * project budget
     */
    @Column({
        type: "int",
    })
    budget: number;

    /**
     * @Column
     * project budget spent
     */
    @Column({
        type: "int",
    })
    budgetspent: number;

    /**
     * @Column
     * project start date
     */
    @Column({
        type: Date,
    })
    startdate: Date;

    /**
     * @Column
     * project end date
     */
    @Column({
        type: Date,
    })
    enddate: Date;

    /**
     * @Column
     * project photo
     */
    @Column({
        type: "varchar",
        length: 150,
    })
    photo: string;
    
}
