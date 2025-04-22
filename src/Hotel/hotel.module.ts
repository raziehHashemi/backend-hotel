import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.entity';
import { Room } from './room.entity';
import { Reservation } from './reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel, Room, Reservation])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}