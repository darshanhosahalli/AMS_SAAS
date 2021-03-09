/**
 * Interface for projects CRUD operations
 */
export interface IProjects {
    readonly projectid: string
    readonly name: string
    readonly location: string
    readonly clientname: string
    readonly description: string
    readonly budget: number
    readonly budgetspent: number
    readonly startdate: Date
    readonly enddate: Date
    readonly photo: string
}