import { IsString, IsPhoneNumber, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  username?: string;  

  @IsPhoneNumber('IR')  
  @IsOptional()
  phoneNumber?: string;  

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;  
}