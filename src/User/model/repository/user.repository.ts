import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../model/entity/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()  
@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async createUser(createUserDto: CreateUserDto): Promise<User | null> {
    const user = this.create();  
    user.username = createUserDto.username;
    user.phoneNumber = createUserDto.phoneNumber;  
    user.password = await bcrypt.hash(createUserDto.password, 10);  
    return await this.save(user);  
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.findOne({ where: { id } }) || null;  
  }

  async getUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
    return await this.findOne({ where: { phoneNumber } }) || null;  
  }

  async updateUser(id: string, updatedData: UpdateUserDto): Promise<User | null> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      return null;  
    }

    if (updatedData.password) {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    }

    this.merge(user, updatedData);  
    return await this.save(user);  
  }

  async deleteUser(id: string): Promise<void> {
    await this.softDelete(id);  
  }
}