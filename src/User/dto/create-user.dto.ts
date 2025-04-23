import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength } from 'class-validator';  

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;  
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;  

  @IsString()
  @MinLength(6)  
  @IsNotEmpty()
  readonly password: string;  

  @IsOptional()
  @IsString()
  readonly role: string;  
}