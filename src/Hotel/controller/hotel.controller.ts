import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { HotelService } from '../service/hotel.service';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { CreateRoomDto } from '../dto/create-room.dto';
import { CreateReservationDto } from '../dto/create-reservation.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  
  @Post('create')
  async createHotel(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.createHotel(createHotelDto);  
  }

  
  @Get('all')
  async getAllHotels() {
    return this.hotelService.getAllHotels();  
  }

  
  @Get(':id')
  async getHotelById(@Param('id') id: string) {
    return this.hotelService.getHotelById(id);  
  }

  
  @Post('update/:id')
  async updateHotel(
    @Param('id') id: string,
    @Body() updateHotelDto: CreateHotelDto,
  ) {
    return this.hotelService.updateHotel(id, updateHotelDto);  
  }

  
  @Delete('delete/:id')
  async deleteHotel(@Param('id') id: string) {
    return this.hotelService.deleteHotel(id);  
  }

  
  @Post('rooms/create')
  async createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.hotelService.createRoom(createRoomDto);  
  }

  
  @Get('rooms')
  async getAllRooms() {
    return this.hotelService.getAllRooms();  
  }

  
  @Post('reservations/create')
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.hotelService.createReservation(createReservationDto);  
  }

  
  @Get('reservations')
  async getAllReservations() {
    return this.hotelService.getAllReservations();  
  }
}