import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { Book } from "./Book";

export enum FamilyMember {
  MOTHER = "mother",
  FATHER = "father",
  BROTHER = "brother",
  SISTER = "sister",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  address: string;

  @Column({
    type: "set",
    enum: FamilyMember,
    default: [FamilyMember.FATHER, FamilyMember.MOTHER],
  })
  family: FamilyMember[];

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToMany((type) => Book, (book) => book.users)
  books: Book[];
}
