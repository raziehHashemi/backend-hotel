import { EntityRepository, Repository } from 'typeorm';
import { Room } from '../model/entity/room.entity'; 

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
  
  async createRoom(roomData: Partial<Room>): Promise<Room> {
    const room = this.create(roomData);
    return await this.save(room);
  }

  
  async getRoomById(id: string): Promise<Room> {
    try {
      return await this.findOneOrFail({ where: { id } }); 
    } catch (error) {
      throw new Error('Room not found');
    }
  }

  
  async updateRoom(id: string, updatedData: Partial<Room>): Promise<Room> {
    try {
      await this.update(id, updatedData);
      return await this.findOneOrFail({ where: { id } }); 
    } catch (error) {
      throw new Error('Room not found or update failed');
    }
  }

  
  async deleteRoom(id: string): Promise<void> {
    try {
      await this.softDelete(id);
    } catch (error) {
      throw new Error('Room not found');
    }
  }
}