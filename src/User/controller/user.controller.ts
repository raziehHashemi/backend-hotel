import { Controller, Post, Body, Get, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { JwtAuthGuard } from '../jwt/jwt.guard'; 

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);  
  }

 
  @Post('/login')
  async login(@Body() loginDto: { phoneNumber: string, password: string }) {
    return this.userService.login(loginDto.phoneNumber, loginDto.password);  
  }

  
  @UseGuards(JwtAuthGuard) 
  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);  
  }

  
  @UseGuards(JwtAuthGuard)  
  @Patch('/update/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);  
  }

  
  @UseGuards(JwtAuthGuard)  
  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);  
  }
}