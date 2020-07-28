import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Book {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  createdAt: Date;
}
