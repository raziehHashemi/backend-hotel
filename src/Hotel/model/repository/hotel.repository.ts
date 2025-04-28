import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Hotel } from '../../model/entity/hotel.entity';
import { CreateHotelDto } from '../../dto/create-hotel.dto';
import { UpdateHotelDto } from '../../dto/update-hotel.dto';

@Injectable()
@EntityRepository(Hotel)
export class HotelRepository extends Repository<Hotel> {
  
  async createHotel(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const hotel = this.create(createHotelDto);
    return await this.save(hotel);
  }

  async getHotelById(id: string): Promise<Hotel | null> {
    return await this.findOne({ where: { id } }) || null;
  }

  async updateHotel(id: string, updatedData: UpdateHotelDto): Promise<Hotel | null> {
    const hotel = await this.findOne({ where: { id } });
    if (!hotel) {
      return null;
    }
    this.merge(hotel, updatedData);
    return await this.save(hotel);
  }

  async deleteHotel(id: string): Promise<void> {
    await this.softDelete(id);
  }

  async getAllHotels(): Promise<Hotel[]> {
    return await this.find();
  }
}