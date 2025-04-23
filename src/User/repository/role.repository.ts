import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../model/entity/role.entity'; 
@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  
  async createRole(roleData: Partial<Role>): Promise<Role> {
    const role = this.create(roleData);  
    return await this.save(role);  
  }

  
  async getRoleById(id: string): Promise<Role> {
    try {
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('Role not found');  
    }
  }

  
  async updateRole(id: string, updatedData: Partial<Role>): Promise<Role> {
    try {
      await this.update(id, updatedData);  
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('Role not found or update failed');  
    }
  }

 
  async deleteRole(id: string): Promise<void> {
    try {
      await this.softDelete(id);  
    } catch (error) {
      throw new Error('Role not found');  
    }
  }

  
  async getAllRoles(): Promise<Role[]> {
    return await this.find();  
  }
}