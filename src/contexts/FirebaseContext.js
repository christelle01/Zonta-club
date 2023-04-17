import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { FIREBASE_API } from "../config";
import React, { createContext, useContext, useEffect } from "react";

const app = initializeApp(FIREBASE_API);
export const analytics = getAnalytics(app);

const DBProvider = createContext({});
export const AUTH = getAuth(app);
export const DB = getFirestore(app);

export const useDbContext = () => useContext(DBProvider);

export default function FirebaseContext({ children }) {
  useEffect(() => {
    signInAnonymously(AUTH)
      .then(() => {
        console.log("Signed");
      })
      .catch(() => console.log("signed failed"));
  }, []);

  return <DBProvider.Provider value={{}}>{children}</DBProvider.Provider>;
}
