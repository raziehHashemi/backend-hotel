import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelService } from './service/hotel.service';
import { HotelController } from './controller/hotel.controller';
import { HotelRepository } from './model/repository/hotel.repository';
import { RoomRepository } from './model/repository/room.repository'; 
import { ReservationRepository } from './model/repository/reservation.repository'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([HotelRepository, RoomRepository, ReservationRepository]), 
  ], 
  controllers: [HotelController],
  providers: [HotelService, RoomRepository, ReservationRepository], 
})
export class HotelModule {}