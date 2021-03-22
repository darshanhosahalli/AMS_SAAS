/**
 * Interface for attendance CRUD operations
 */
 export interface IAttendance {
    readonly aid: number;
    readonly date: Date;
    readonly empid: string;
    readonly projectid: string;
}