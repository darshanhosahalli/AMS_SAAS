import { IsNotEmpty, IsPhoneNumber, IsString, Validate } from "class-validator";

/**
 * DTO for vendor creation
 */
export class CreateVendorDto {

    /**
    * vendor name
    */
    @IsNotEmpty()
    @IsString()
    name: string;

    /**
     * vendor string
     */
    @IsNotEmpty()
    @IsString()
    address: string;

    /**
     * phone number
     */
    @IsNotEmpty()
    @Validate(IsPhoneNumber)
    phone: number;
}
