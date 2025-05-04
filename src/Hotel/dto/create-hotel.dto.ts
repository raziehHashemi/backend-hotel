import { IsString, IsNotEmpty, IsObject, IsLatitude, IsLongitude, IsOptional } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsObject()
  @IsNotEmpty()
  @IsLatitude()
  @IsLongitude()
  location: { latitude: number; longitude: number };  
}