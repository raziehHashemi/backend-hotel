import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Hotel } from './hotel.entity';
import { Reservation } from './reservation.entity';  // Import Reservation Entity

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('decimal')
  price: number;

  @Column()
  view: string;

  @Column('simple-array')
  amenities: string[];

  @ManyToOne(() => Hotel, hotel => hotel.rooms)
  hotel: Hotel;

  @OneToMany(() => Reservation, reservation => reservation.room)
  reservations: Reservation[]; // تعریف رزروهای اتاق

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}