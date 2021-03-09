/**
 * Interface for items CRUD operations
 */
export interface ITems {
    readonly hsn: string
    readonly name: string
    readonly cost: number
    readonly quantity?: number
    readonly icid: number
}