import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Room } from '../../model/entity/room.entity';  
import { CreateRoomDto } from '../../dto/create-room.dto';  

@Injectable()
@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {

  
  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
   
    const room = this.create({
      name: createRoomDto.name,
      description: createRoomDto.description,
      price: createRoomDto.price,
      location: createRoomDto.location,
    });
    
    return await this.save(room);
  }

 
  async getRoomById(id: string): Promise<Room | null> {
    return await this.findOne({ where: { id } }) || null;  
  }

  
  async updateRoom(id: string, updatedData: CreateRoomDto): Promise<Room | null> {
    const room = await this.findOne({ where: { id } });
    if (!room) {
      return null;  
    }
    
    this.merge(room, updatedData);
    return await this.save(room);  
  }

 
  async deleteRoom(id: string): Promise<void> {
    await this.softDelete(id);  
  }

  
  async getAllRooms(): Promise<Room[]> {
    return await this.find();  
  }
}