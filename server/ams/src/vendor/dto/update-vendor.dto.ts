import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Validate } from 'class-validator';
import { IVendor } from '../interface/vendor.interface';

/**
 * DTO for vendor updation
 */
export class UpdateVendorDto implements IVendor {

    /**
    * vendor id
    */
    @IsNotEmpty()
    @IsNumber()
    vid: number;

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
