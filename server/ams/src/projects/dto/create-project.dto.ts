import { IProjects } from "../interface/projects.interface";
import { IsNotEmpty, IsString, Min, IsDate, IsOptional, IsDateString } from "class-validator";

/**
 * DTO for projects creation
 */
export class CreateProjectDto implements IProjects{

    /**
     * project id
     */
    @IsNotEmpty()
    @IsString()
    readonly projectid: string;

    /**
     * project name
     */
    @IsNotEmpty()
    @IsString()
    name: string;

    /**
     * project location
     */
    @IsNotEmpty()
    @IsString()
    location: string;

    /**
     * project client name
     */
    @IsNotEmpty()
    @IsString()
    clientname: string;

    /**
     * project description
     */
    @IsNotEmpty()
    @IsString()
    description: string;

    /**
     * Project budget
     */
    @IsNotEmpty()
    @Min(0)
    budget: number;

    /**
     * project budget spent
     */
    @IsOptional()
    @IsNotEmpty()
    @Min(0)
    budgetspent: number;

    /**
     * project start date
     */
    @IsNotEmpty()
    @IsDateString()
    startdate: Date;

    /**
     * project end date
     */
    @IsNotEmpty()
    @IsDate()
    enddate: Date;

    /**
     * project end date
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    photo: string;
}
