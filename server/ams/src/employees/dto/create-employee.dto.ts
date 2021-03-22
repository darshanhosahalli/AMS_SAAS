import { IsOptional, IsNotEmpty, IsString, IsEnum, Min, Max, IsPositive, Validate, IsNumberString } from 'class-validator';
import { IEmployee } from '../interfaces/employee.interface';
import { IsPhoneNumber } from 'src/utils/phone-number.validator';

/**
 * Enum for employee designations
 */
export enum Designations {
    ASSOCIATE = "associate",
    SENIOR = "senior",
    LEAD = "lead",
    EXECUTIVE = "executive",
}

/**
 * DTO for employee creation
 */
export class CreateEmployeeDto implements IEmployee{

    /**
     * emp id
     */
    @IsNotEmpty()
    @IsString()
    readonly empid: string

    /**
     * employee name
     */
    @IsNotEmpty()
    @IsString()
    readonly name: string

    /**
     * employee age
     */
    @IsNotEmpty()
    @Min(12)
    @Max(75)
    readonly age: number

    /**
     * employee phone number
     */
    @IsNotEmpty()
    @IsNumberString()
    @Validate(IsPhoneNumber)
    readonly phone: string

    /**
     * employee salary
     */
    @IsNotEmpty()
    @IsPositive()
    readonly salary: number

    /**
     * employee designation
     */
    @IsNotEmpty()
    @IsEnum(Designations, {
        message: "Designation should be any one of associate, senior, lead and executive"
    })
    readonly designation: Designations

    /**
     * employee photo
     */
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly photo: string

    /**
     * employee department
     */
    @IsNotEmpty()
    @IsString()
    readonly department: string
}