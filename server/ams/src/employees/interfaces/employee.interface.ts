import { Designations } from "../dto/create-employee.dto";

/**
 * Interface for employee CRUD operations
 */
export interface IEmployee {
    readonly empid: string
    readonly name: string
    readonly age: number
    readonly phone: string
    readonly salary: number
    readonly designation: Designations
    readonly photo?: string
}