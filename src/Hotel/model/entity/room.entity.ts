import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { Hotel } from './hotel.entity';
import { Reservation } from '../../../Hotel/model/entity/reservation.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  location: string;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;  

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Expose()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  @Expose()
  updatedAt: Date;

  @DeleteDateColumn()
  @Expose()
  deletedAt: Date;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];
}