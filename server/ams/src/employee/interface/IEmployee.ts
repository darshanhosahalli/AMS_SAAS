import { Designations } from "../dto/create-employee.dto";

export interface IEmployee {
    readonly empId: string
    readonly name: string
    readonly age: number
    readonly phone: string
    readonly salary: number
    readonly designation: Designations
    readonly photo?: string
}