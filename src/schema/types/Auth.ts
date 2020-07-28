import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Auth {
  @Field({ nullable: true })
  uid?: string;

  @Field()
  message: string;

  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  token?: string;
}
