import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto'; 
import { User } from '../model/entity/user.entity'; 

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository, 
  ) {}

  
  async create(createUserDto: CreateUserDto): Promise<User> {
    
    return this.userRepository.createUser(createUserDto);
  }

 
  async login(email: string, password: string): Promise<any> {
   
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
   
    return user; 
  }

 
  async findOne(id: string): Promise<User> {
    
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user; 
  }
}