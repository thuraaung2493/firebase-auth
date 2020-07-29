import { InputType, Field } from "type-graphql";
import { User } from "schema/types/User";

@InputType()
export class UpdateUserInput implements Partial<User> {
  @Field()
  uid: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email: string;
}
