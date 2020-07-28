import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Auth {
  @Field({ nullable: true })
  uid?: string;

  @Field()
  message: string;

  @Field({ nullable: true })
  errors?: string;

  @Field({ nullable: true })
  token?: string;
}
