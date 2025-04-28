import { EntityRepository, Repository } from 'typeorm';
import { Reservation } from '../entity/reservation.entity'; 
import { CreateReservationDto } from '../../dto/create-reservation.dto';

@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation> {

  
  async createReservation(reservationData: CreateReservationDto): Promise<Reservation> {
    const reservation = this.create(reservationData);  
    return await this.save(reservation);  
  }

  
  async getReservationById(id: string): Promise<Reservation> {
    try {
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('Reservation not found');
    }
  }

  
  async updateReservation(id: string, updatedData: CreateReservationDto): Promise<Reservation> {
    try {
      await this.update(id, updatedData); 
      return await this.findOneOrFail({ where: { id } });  
    } catch (error) {
      throw new Error('Reservation not found or update failed');
    }
  }

  
  async deleteReservation(id: string): Promise<void> {
    try {
      await this.softDelete(id);  
    } catch (error) {
      throw new Error('Reservation not found');
    }
  }

 
  async getAllReservations(): Promise<Reservation[]> {
    return await this.find();  
  }
}