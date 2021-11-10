import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bug } from './Bug';
import { User } from './User';
import BaseModel from './BaseModel';

@Entity({ name: 'notes' })
export class Note extends BaseModel {

  @Column()
  body: string;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'authorId' })
  author: User;
  @Column()
  authorId: number;

  @ManyToOne(() => Bug, (bug) => bug)
  @JoinColumn({ name: 'bugId' })
  bug: Bug;
  @Column()
  bugId: number;
}
