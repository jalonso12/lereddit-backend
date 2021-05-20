import { Property, PrimaryKey, Entity } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
  // @Field exposes the data to graphql
  // if it is not placed, graphql will not be able to read that specific data
  @Field()
  @PrimaryKey()
  _id!: number;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: 'text' })
  title!: string;
}
