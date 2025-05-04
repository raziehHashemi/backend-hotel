import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from '../model/repository/room.repository';
import { ReservationRepository } from '../model/repository/reservation.repository';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
import { CreateRoomDto } from '../dto/create-room.dto';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { Hotel } from '../model/entity/hotel.entity';
import { Room } from '../model/entity/room.entity';
import { Reservation } from '../model/entity/reservation.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HotelRepository } from '../model/repository/hotel.repository';

@Injectable()
export class HotelService {
  constructor(
    private readonly hotelRepository: HotelRepository,
    private readonly roomRepository: RoomRepository,
    private readonly reservationRepository: ReservationRepository,
  ) {}

  
  async createHotel(createHotelDto: CreateHotelDto): Promise<Hotel> {
    try {
      return await this.hotelRepository.createHotel(createHotelDto);  
    } catch (error) {
      throw new HttpException('Error creating hotel', HttpStatus.BAD_REQUEST);
    }
  }

  
  async getAllHotels(): Promise<Hotel[]> {
    try {
      const hotels = await this.hotelRepository.getAllHotels();
      if (!hotels || hotels.length === 0) {
        throw new HttpException('No hotels found', HttpStatus.NOT_FOUND);
      }
      return hotels;
    } catch (error) {
      throw new HttpException('Error fetching hotels', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  async getHotelById(id: string): Promise<Hotel | null> {
    try {
      const hotel = await this.hotelRepository.getHotelById(id);
      if (!hotel) {
        throw new HttpException('Hotel not found', HttpStatus.NOT_FOUND);
      }
      return hotel;
    } catch (error) {
      throw new HttpException('Error fetching hotel', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 
  async updateHotel(id: string, updateHotelDto: UpdateHotelDto): Promise<Hotel | null> {
    try {
      const hotel = await this.hotelRepository.getHotelById(id);
      if (!hotel) {
        throw new HttpException('Hotel not found', HttpStatus.NOT_FOUND);
      }
      return await this.hotelRepository.updateHotel(id, updateHotelDto);
    } catch (error) {
      throw new HttpException('Error updating hotel', HttpStatus.BAD_REQUEST);
    }
  }

  
  async deleteHotel(id: string): Promise<void> {
    try {
      const hotel = await this.hotelRepository.getHotelById(id);
      if (!hotel) {
        throw new HttpException('Hotel not found', HttpStatus.NOT_FOUND);
      }
      await this.hotelRepository.deleteHotel(id);
    } catch (error) {
      throw new HttpException('Error deleting hotel', HttpStatus.BAD_REQUEST);
    }
  }

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    try {
      return await this.roomRepository.createRoom(createRoomDto);  
    } catch (error) {
      throw new HttpException('Error creating room', HttpStatus.BAD_REQUEST);  
    }
  }

  
  async getAllRooms(): Promise<Room[]> {
    try {
      return await this.roomRepository.getAllRooms();
    } catch (error) {
      throw new HttpException('Error fetching rooms', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  
  async getRoomById(id: string): Promise<Room | null> {
    try {
      const room = await this.roomRepository.getRoomById(id);
      if (!room) {
        throw new HttpException('Room not found', HttpStatus.NOT_FOUND);
      }
      return room;
    } catch (error) {
      throw new HttpException('Error fetching room', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  async createReservation(createReservationDto: CreateReservationDto): Promise<Reservation> {
    try {
      return await this.reservationRepository.createReservation(createReservationDto);
    } catch (error) {
      throw new HttpException('Error creating reservation', HttpStatus.BAD_REQUEST);
    }
  }

  
  async getAllReservations(): Promise<Reservation[]> {
    try {
      return await this.reservationRepository.getAllReservations();
    } catch (error) {
      throw new HttpException('Error fetching reservations', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  async getReservationById(id: string): Promise<Reservation | null> {
    try {
      const reservation = await this.reservationRepository.getReservationById(id);
      if (!reservation) {
        throw new HttpException('Reservation not found', HttpStatus.NOT_FOUND);
      }
      return reservation;
    } catch (error) {
      throw new HttpException('Error fetching reservation', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}