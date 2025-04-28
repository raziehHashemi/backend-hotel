import { IsString, IsOptional, IsObject, IsLatitude, IsLongitude } from 'class-validator';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  name?: string;  

  @IsObject()
  @IsOptional()
  @IsLatitude()
  @IsLongitude()
  location?: { latitude: number; longitude: number };  
}