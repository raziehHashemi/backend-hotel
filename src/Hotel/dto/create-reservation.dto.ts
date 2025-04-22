export class CreateReservationDto {
    userId: number;  // ارتباط با کاربر
    roomId: number;  // ارتباط با اتاق
    checkInDate: Date;
    checkOutDate: Date;
  }