import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Auth } from "schema/types/Auth";
import { User } from "schema/types/User";
import { AddUserInput } from "./inputTypes/AddUser";
import {
  signUp,
  signInWithPassword,
  signInWithToken,
  getCurrentUser,
} from "auth";

@Resolver()
class UserResolver {
  private userCollections: User[] = [];

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return await this.userCollections;
  }

  @Query((returns) => [User])
  async user(): Promise<User[]> {
    return await getCurrentUser();
  }

  @Mutation((returns) => Auth)
  async signUpUser(@Arg("data") data: AddUserInput): Promise<Auth> {
    return await signUp(data);
  }

  @Mutation((returns) => Auth)
  async signInUser(@Arg("data") data: AddUserInput): Promise<Auth> {
    return await signInWithPassword(data);
  }

  @Mutation((returns) => Auth)
  async signInWithToken(@Arg("token") token: string): Promise<Auth> {
    return await signInWithToken(token);
  }
}
