import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
  BaseEntity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Project } from './Project';
import { User } from './User';
import { Note } from './Note';

type Priority = 'low' | 'medium' | 'high';

@Entity({ name: 'bugs' })
export class Bug extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ['low', 'medium', 'high'],
    default: 'low',
  })
  priority: Priority;

  @ManyToOne(() => Project, (project) => project)
  @JoinColumn({ name: 'projectId' })
  project: Project;
  @Column()
  projectId: number;

  @OneToMany(() => Note, (note) => note.bug)
  @JoinColumn()
  notes: Note[];

  @Column({ default: false })
  isResolved: boolean;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'closedById' })
  closedBy: User;
  @Column({ type: 'text', nullable: true })
  closedById: number | null;

  @Column({ type: 'timestamp', nullable: true })
  closedAt: Date | null;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'reopenedById' })
  reopenedBy: User;
  @Column({ type: 'text', nullable: true })
  reopenedById: number | null;

  @Column({ type: 'timestamp', nullable: true })
  reopenedAt: Date | null;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'createdById' })
  createdBy: User;
  @Column()
  createdById: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'updatedById' })
  updatedBy: User;
  @Column({ nullable: true })
  updatedById: number;

  @Column({ nullable: true })
  updatedAt: Date;
}
