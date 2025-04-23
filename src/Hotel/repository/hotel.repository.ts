import { EntityRepository, Repository } from 'typeorm';
import { Hotel } from '../model/entity/hotel.entity'; 

@EntityRepository(Hotel)
export class HotelRepository extends Repository<Hotel> {
  
  async createHotel(hotelData: Partial<Hotel>): Promise<Hotel> {
    const hotel = this.create(hotelData);
    return await this.save(hotel);
  }

 
  async getHotelById(id: string): Promise<Hotel> {
    try {
      return await this.findOneOrFail({ where: { id } }); 
    } catch (error) {
      throw new Error('Hotel not found');
    }
  }

  
  async updateHotel(id: string, updatedData: Partial<Hotel>): Promise<Hotel> {
    try {
      await this.update(id, updatedData); 
      return await this.findOneOrFail({ where: { id } }); 
    } catch (error) {
      throw new Error('Hotel not found or update failed');
    }
  }

  
  async deleteHotel(id: string): Promise<void> {
    try {
      await this.softDelete(id);
    } catch (error) {
      throw new Error('Hotel not found');
    }
  }
}