import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany((type) => User, (user) => user.books)
  @JoinTable({ name: "bookUser" })
  users: User[];
}
