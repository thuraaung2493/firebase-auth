import * as firebase from "firebase/app";
import "firebase/auth";
import { AddUserInput } from "schema/resolvers/inputTypes/AddUser";
import { Auth } from "schema/types/Auth";

export const signUp = async ({
  email,
  password,
}: AddUserInput): Promise<Auth> => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const token = await user.getIdToken();

    return {
      uid: user.uid,
      message: "Success",
      token,
    };
  } catch (error) {
    const message = error.message;
    const code = error.code;
    return {
      message: message,
      errors: code,
    };
  }
};

export const signInWithPassword = async ({
  email,
  password,
}: AddUserInput): Promise<Auth> => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    const token = await user.getIdToken();

    return {
      uid: user.uid,
      message: "Success",
      token,
    };
  } catch (error) {
    const message = error.message;
    const code = error.code;
    return {
      message: message,
      errors: code,
    };
  }
};

export const signInWithToken = async (customToken: string): Promise<Auth> => {
  try {
    const { user } = await firebase.auth().signInWithCustomToken(customToken);

    const token = await user.getIdToken();

    return {
      uid: user.uid,
      message: "Success",
      token,
    };
  } catch (error) {
    const message = error.message;
    const code = error.code;
    return {
      message: message,
      errors: code,
    };
  }
};

export const getCurrentUser = async (): Promise<[]> => {
  const result = await firebase.auth().currentUser;
  if (result) {
    console.log(result.email, result.uid);
  }
  return [];
};
