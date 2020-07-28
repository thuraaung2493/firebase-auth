import { InputType, Field, ID } from "type-graphql";
import { User } from "schema/types/User";

@InputType()
export class AddUserInput implements Partial<User> {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  password?: string;
}
