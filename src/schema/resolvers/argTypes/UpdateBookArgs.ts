import { ArgsType, Field, ID } from "type-graphql";

@ArgsType()
export class UpdateBookArgs {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;
}
