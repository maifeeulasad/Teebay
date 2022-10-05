import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

export enum ProductType {
  ELECTRONICS = 'ELECTRONICS',
  FURNITURE = 'FURNITURE',
  HOME_APPLIANCES = 'HOME APPLIANCES',
  SPORTING_GOODS = 'SPORTING GOODS',
  OUTDOOR = 'OUTDOOR',
  TOYS = 'TOYS',
}

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  productId: string;

  @Column({ unique: true })
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  details: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Field(() => User)
  @OneToOne(() => User)
  @JoinColumn()
  owner: User;

  @Field(() => [String], { nullable: true })
  @Column('text', { array: true })
  productTypes: string[];
}
