import { IsOptional, IsNotEmpty, IsString, IsEnum, Min, Max, IsPositive, Validate, IsNumberString } from 'class-validator';
import { IsPhoneNumber } from 'src/utils/phone-number.validator';
import { IEmployee } from '../interface/IEmployee';

export enum Designations {
    ASSOCIATE = "associate",
    SENIOR = "senior",
    LEAD = "lead",
    EXECUTIVE = "executive",
}

export class CreateEmployeeDto implements IEmployee{

    @IsNotEmpty()
    @IsString()
    readonly empId: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @Min(12)
    @Max(75)
    age: number

    @IsNotEmpty()
    @IsNumberString()
    @Validate(IsPhoneNumber)
    phone: string

    @IsNotEmpty()
    @IsPositive()
    salary: number

    @IsNotEmpty()
    @IsEnum(Designations, {
        message: "Designation should be any one of associate, senior, lead and executive"
    })
    designation: Designations

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    photo: string

    @IsNotEmpty()
    @IsString()
    department: string
}