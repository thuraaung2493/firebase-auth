import { InputType, Field } from "type-graphql";
import { User } from "schema/types/User";

@InputType()
export class AddUserInput implements Partial<User> {
  @Field({ nullable: true })
  name?: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
