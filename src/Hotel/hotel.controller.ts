import { Controller, Post, Body, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { CreateRoomDto } from './dto/create-room.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post('create')
  async createHotel(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.createHotel(createHotelDto);
  }

  @Post('rooms')
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.hotelService.createRoom(createRoomDto);
  }

  @Post('reservations')
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.hotelService.createReservation(createReservationDto);
  }

  @Get()
  async getHotels() {
    return this.hotelService.getHotels(); // فراخوانی متد getHotels
  }
}