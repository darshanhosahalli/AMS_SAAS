import { ITems } from "../iterfaces/items.interface";
import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from "class-validator";

/**
 * DTO for item creation
 */
export class CreateItemDto implements ITems{

    /**
     * Item hsn
     */
    @IsNotEmpty()
    @IsString()
    hsn: string

    /**
     * item name
     */
    @IsNotEmpty()
    @IsString()
    name: string;

    /**
     * Item cost
     */
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    cost: number;

    /**
     * item quantity
     */
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    quantity: number;

    /**
     * Item category
     */
    @IsNotEmpty()
    @IsNumber()
    icid: number;
}
