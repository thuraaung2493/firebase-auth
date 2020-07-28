import { InputType, Field, ID } from "type-graphql";
import { User } from "schema/types/User";

@InputType()
export class FindUserInput implements Partial<User> {
  @Field((type) => ID)
  id: string;
}
