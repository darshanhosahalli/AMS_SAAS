import { IsDateString, IsNotEmpty, IsString } from "class-validator";

/**
 * DTO for Attendance creation
 */
export class CreateAttendanceDto {

    /**
     * date
     */
     @IsNotEmpty()
     @IsDateString()
    readonly date: Date;

    /**
     * emp id
     */
    @IsNotEmpty()
    @IsString()
    readonly empid: string;

    /**
     * project id
     */
    @IsNotEmpty()
    @IsString()
    readonly projectid: string;
}
