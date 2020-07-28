import { Resolver, Query, Mutation, Args, Arg } from "type-graphql";
import { Book } from "schema/types/Book";
import { AddBookInput } from "./inputTypes/AddBook";
import { getManager, EntityManager } from "typeorm";
import { Book as BookEntity } from "../../entity/Book";
import { UpdateBookArgs } from "./argTypes/UpdateBookArgs";

@Resolver()
class BookResolver {
  private entityManager: EntityManager = getManager();

  @Query((returns) => [Book])
  async books(): Promise<Book[]> {
    return await this.entityManager.find(BookEntity, {
      select: ["id", "title", "description", "createdAt"],
    });
  }

  @Query((returns) => Book)
  async book(@Arg("id") id: string): Promise<Book> {
    return await this.entityManager.findOneOrFail(BookEntity, id, {
      select: ["id", "title", "description", "createdAt"],
    });
  }

  @Mutation((returns) => Book)
  async addBook(@Args() { title, description }: AddBookInput): Promise<Book> {
    const book: BookEntity = await this.entityManager.create(BookEntity, {
      title,
      description,
    });

    return await this.entityManager.save(book);
  }

  @Mutation((returns) => Boolean)
  async updateBook(
    @Args() { id, title, description }: UpdateBookArgs
  ): Promise<boolean> {
    try {
      await this.entityManager.update(BookEntity, id, {
        title,
        description,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation((returns) => Boolean)
  async deleteBook(@Arg("id") id: string): Promise<Boolean> {
    try {
      await this.entityManager.delete(BookEntity, id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
