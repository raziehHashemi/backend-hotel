import { IsString, IsNotEmpty, MinLength, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsPhoneNumber('IR')  
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @MinLength(6)
  password: string;
}