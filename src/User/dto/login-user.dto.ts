import { IsString, IsNotEmpty, IsPhoneNumber, IsStrongPassword,MinLength } from 'class-validator';

export class LoginDto {
  @IsPhoneNumber('IR')  
  @IsNotEmpty()
  readonly phoneNumber: string;  

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @IsStrongPassword()  
  readonly password: string;  
}