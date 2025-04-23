import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator'; 

export class UpdateUserDto {
  @IsOptional()  
  @IsString()
  readonly name?: string;  

  @IsOptional()  
  @IsEmail()
  readonly email?: string;  

  @IsOptional()  
  @MinLength(6)  
  readonly password?: string;  
  @IsOptional()  
  @IsString()
  readonly role?: string;  
}