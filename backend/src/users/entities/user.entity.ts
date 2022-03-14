import { Field, ObjectType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field((type) => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field((type) => Date)
  @CreateDateColumn()
  createdAt: Date;
  @Field((type) => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}
