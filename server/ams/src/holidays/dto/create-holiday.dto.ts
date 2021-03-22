import { IsNotEmpty, IsString, IsDateString } from "class-validator";


export class HolidayDto {
    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsString()
    name: string;
}
