import { IsString, IsNotEmpty, IsUUID } from 'class-validator';  
export class CreateRoleDto {
  @IsUUID()  
  id?: string;  

  @IsString()
  @IsNotEmpty()
  name: string;  
}