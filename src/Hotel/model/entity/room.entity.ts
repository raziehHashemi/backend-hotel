import { Entity,PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { Hotel } from './hotel.entity';  
import { Reservation } from './reservation.entity';  

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'decimal' })
  price: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Expose()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @Expose()
  updatedAt: Date;

  @DeleteDateColumn()
  @Expose()
  deletedAt: Date;
}