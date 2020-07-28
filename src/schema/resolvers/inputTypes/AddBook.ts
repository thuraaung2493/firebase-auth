import { ArgsType, Field } from "type-graphql";
import { Book } from "schema/types/Book";

@ArgsType()
export class AddBookInput implements Partial<Book> {
  @Field()
  title: string;

  @Field()
  description: string;
}
