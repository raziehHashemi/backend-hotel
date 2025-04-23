import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelService } from './service/hotel.service';
import { HotelController } from './controller/hotel.controller';
import { HotelRepository } from './repository/hotel.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HotelRepository])], 
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}