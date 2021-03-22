import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class DepartmentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    did: number;

    @Column({
        type: "varchar",
        unique: true,
    })
    name: string;
}
