import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';  

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;  

  @IsInt()
  @IsNotEmpty()
  readonly floor: number;  

  @IsInt()
  @IsNotEmpty()
  readonly capacity: number;  

  @IsOptional()
  @IsString()
  readonly description?: string;  
}