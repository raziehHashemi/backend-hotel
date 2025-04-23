import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';  

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  readonly hotelId: string;  

  @IsString()
  @IsNotEmpty()
  readonly roomId: string;  

  @IsString()
  @IsNotEmpty()
  readonly userId: string;  

  @IsDateString()
  @IsNotEmpty()
  readonly checkInDate: Date;  

  @IsDateString()
  @IsNotEmpty()
  readonly checkOutDate: Date;  

  @IsOptional()
  @IsString()
  readonly specialRequests?: string;  
}