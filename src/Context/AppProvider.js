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

  const [userInfo, setUserInfo] = useState({
    data: {},
    loading: true,
    erorr: null,
  });
  console.log("🚀 ~ file: AppProvider.js:38 ~ AppProvider ~ userInfo:", userInfo)

  useEffect(() => {
    let unSubcribe;
    setUserInfo((current) => ({
      ...current,
      loading: true,
    }));
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
        setUserInfo((current) => ({
          ...current,
          data: documents[0],
          loading: false,
        }));
      });
    } else {
      setUserInfo((current) => ({
        ...current,
        loading: false,
      }));
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
