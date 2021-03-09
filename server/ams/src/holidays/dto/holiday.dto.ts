import { IsNotEmpty, IsString, IsDateString } from "class-validator";


export class HolidayDto {
    @IsNotEmpty()
    @IsDateString()
    readonly date: Date;

    @IsNotEmpty()
    @IsString()
    readonly name: string;
}