import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };

      return userData;
    } catch (error) {
      throw error.code;
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userData = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };

      return userData;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const auth = getAuth();
  await signOut(auth);
  return { email: null, uid: null };
});
