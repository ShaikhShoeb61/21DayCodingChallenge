import { db } from "../../../Firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVans = createAsyncThunk("vans/getVans", async () => {
  const vansCollectionRef = collection(db, "vans");
  const querySnapshot = await getDocs(vansCollectionRef);
  const newData = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return newData;
});

export const getVan = createAsyncThunk("van/getVans", async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
});
export const getHostVans = createAsyncThunk("vans/getHostVans", async () => {
  const vansCollectionRef = collection(db, "vans");
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const newDataHost = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return newDataHost;
});
