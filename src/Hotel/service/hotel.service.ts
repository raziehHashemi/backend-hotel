import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelRepository } from '../repository/hotel.repository';  // وارد کردن Repository
import { RoomRepository } from '../repository/room.repository';  // وارد کردن RoomRepository
import { ReservationRepository } from '../repository/reservation.repository';  // وارد کردن ReservationRepository
import { UserRepository } from '..User/repository/user.repository';  // وارد کردن UserRepository
import { Hotel } from '../model/entity/hotel.entity';  // وارد کردن Hotel
import { Room } from '../model/entity/room.entity';  // وارد کردن Room
import { Reservation } from '../model/entity/reservation.entity';  // وارد کردن Reservation
import { CreateHotelDto } from '../dto/create-hotel.dto';  // وارد کردن CreateHotelDto
import { CreateRoomDto } from '../dto/create-room.dto';  // وارد کردن CreateRoomDto
import { CreateReservationDto } from '../dto/create-reservation.dto';  // وارد کردن CreateReservationDto

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(HotelRepository)
    private readonly hotelRepository: HotelRepository,
    @InjectRepository(RoomRepository)
    private readonly roomRepository: RoomRepository,
    @InjectRepository(ReservationRepository)
    private readonly reservationRepository: ReservationRepository, // تزریق ReservationRepository
    @InjectRepository(UserRepository) // تزریق UserRepository
    private readonly userRepository: UserRepository,  // تزریق UserRepository
  ) {}

  // ایجاد هتل
  async createHotel(createHotelDto: CreateHotelDto): Promise<Hotel> {
    return this.hotelRepository.createHotel(createHotelDto);
  }

  // ایجاد اتاق
  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomRepository.createRoom(createRoomDto);
  }

  // ایجاد رزرو
  async createReservation(createReservationDto: CreateReservationDto): Promise<Reservation> {
    // گرفتن داده‌های مرتبط با اتاق و کاربر
    const room = await this.roomRepository.findOneOrFail({ where: { id: createReservationDto.roomId } });
    const user = await this.userRepository.findOneOrFail({ where: { id: createReservationDto.userId } });

    // ساخت داده‌های رزرو جدید از DTO
    const reservationData: Partial<Reservation> = {
      hotel: { id: createReservationDto.hotelId },
      room: room,  // استفاده از Entity به جای id
      user: user,  // استفاده از Entity به جای id
      checkInDate: createReservationDto.checkInDate,
      checkOutDate: createReservationDto.checkOutDate,
    };

    return this.reservationRepository.createReservation(reservationData); // فراخوانی متد ایجاد رزرو
  }

  // دریافت همه هتل‌ها
  async getHotels(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }
}