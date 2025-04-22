import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../User/user.entity';  // Import User Entity
import { Room } from './room.entity';  // Import Room Entity

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.reservations)
  user: User;

  @ManyToOne(() => Room, room => room.reservations)
  room: Room;

  @Column()
  checkInDate: Date;

  @Column()
  checkOutDate: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}