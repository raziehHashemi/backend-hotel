import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../../model/entity/role.entity';  
import { CreateRoleDto } from '../../dto/create-role.dto';  

@Injectable()  
@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {


  async createRole(createRoleDto: CreateRoleDto): Promise<Role | null> {
    const role = this.create(createRoleDto);  
    return await this.save(role);  
  }

  
  async getRoleById(id: string): Promise<Role | null> {
    return await this.findOne({ where: { id } }) || null;  
  }

  
  async updateRole(id: string, updatedData: CreateRoleDto): Promise<Role | null> {
    const role = await this.findOne({ where: { id } });

    if (!role) {
      return null; 
    }

    
    this.merge(role, updatedData);  
    return await this.save(role); 
  }

 
  async deleteRole(id: string): Promise<void> {
    await this.softDelete(id); 
  }

  
  async getAllRoles(): Promise<Role[]> {
    return await this.find();  
  }
}