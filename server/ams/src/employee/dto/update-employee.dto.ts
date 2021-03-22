import { PartialType } from '@nestjs/mapped-types';
import { Designations } from './create-employee.dto';
import { IsOptional, IsNotEmpty, IsString, Min, Max, IsNumberString, Validate, IsPhoneNumber, IsPositive, IsEnum } from 'class-validator';

export class UpdateEmployeeDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string

    @IsOptional()
    @IsNotEmpty()
    @Min(12)
    @Max(75)
    age: number

    @IsOptional()
    @IsNotEmpty()
    @IsNumberString()
    @Validate(IsPhoneNumber)
    phone: string

    @IsOptional()
    @IsNotEmpty()
    @IsPositive()
    salary: number

    @IsOptional()
    @IsNotEmpty()
    @IsEnum(Designations, {
        message: "Designation should be any one of associate, senior, lead and executive"
    })
    designation: Designations

    @IsOptional()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    photo: string

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    department: string
}
