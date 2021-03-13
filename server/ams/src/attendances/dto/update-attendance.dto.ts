import { IsNotEmpty, IsDateString, IsString, IsNumber, Min } from 'class-validator';

/**
 * Update attendance DTO
 */
export class UpdateAttendanceDto {

    /**
     * attendance id
     */
     @IsNotEmpty()
     @IsNumber()
     @Min(1)
    readonly aid: number;

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
