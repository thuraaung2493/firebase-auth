import * as firebase from "firebase/app";
import * as admin from "firebase-admin";
import "firebase/auth";
import { AddUserInput } from "schema/resolvers/inputTypes/AddUser";
import { Auth } from "schema/types/Auth";
import { UpdateUserInput } from "schema/resolvers/inputTypes/UpdateUser";
export const signUp = async ({
  name,
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
    return {
      message: error.message,
      error: error.code,
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
    return {
      message: error.message,
      error: error.code,
    };
  }
};

export const updateProfile = async ({
  uid,
  name,
  email,
}: UpdateUserInput): Promise<Auth> => {
  try {
    await admin.auth().updateUser(uid, {
      email,
      displayName: name,
    });
    return {
      uid,
      message: "Success",
    };
  } catch (error) {
    return {
      message: error.message,
      error: error.code,
    };
  }
};

export const deleteUser = async ({ uid }: UpdateUserInput): Promise<Auth> => {
  try {
    await admin.auth().deleteUser(uid);
    return{
      uid,
      message:"Successfully Deleted",
    }
  } catch (error) {
    return {
      message: error.message,
      error: error.code,
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
    return {
      message: error.message,
      error: error.code,
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
