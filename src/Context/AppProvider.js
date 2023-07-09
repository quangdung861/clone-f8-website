import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "./AuthProvider";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebaseConfig";
import moment from "moment";
import { generateKeywords } from "services";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState("loading");

  useEffect(() => {
    let unSubcribe;
    if (uid) {
      const userInfoRef = query(
        collection(db, "users"),
        where("uid", "==", uid)
      );
      unSubcribe = onSnapshot(userInfoRef, (docsSnap) => {
        const documents = docsSnap.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          return {
            ...data,
            id: id,
          };
        });
        setUserInfo(documents[0]);
      });
    } else {
      setUserInfo(null)
    }
    return () => unSubcribe && unSubcribe();
  }, [uid]);

  return (
    <AppContext.Provider
      value={{
        userInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
