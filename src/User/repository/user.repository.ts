import { EntityRepository, Repository } from 'typeorm';
import { User } from '../model/entity/user.entity';  

@EntityRepository(User)
export class UserRepository extends Repository<User> {
 
  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.create(userData);  
    return await this.save(user);  
  }

 
  async getUserById(id: string): Promise<User> {
    try {
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('User not found');  
    }
  }

 
  async updateUser(id: string, updatedData: Partial<User>): Promise<User> {
    try {
      await this.update(id, updatedData);  
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('User not found or update failed');  
    }
  }

  
  async deleteUser(id: string): Promise<void> {
    try {
      await this.softDelete(id);  
    } catch (error) {
      throw new Error('User not found');  
    }
  }
}