import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  BookNum: string;
}