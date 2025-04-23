import { IsString, IsNotEmpty, IsOptional } from 'class-validator';  

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string; 

  @IsString()
  @IsNotEmpty()
  readonly location: string;  

  @IsOptional()
  @IsString()
  readonly description?: string;  
}