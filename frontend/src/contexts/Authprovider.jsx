import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authocontext = createContext();
const auth = getAuth(app);
const gooogleprovider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const createUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginwithgoogle = () => {
    setloading(true);
    return signInWithPopup(auth, gooogleprovider);
  };
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authinfo = {
    user,
    createUser,
    loginwithgoogle,
    loading,
    login,
    logOut,
  };
  return (
    <authocontext.Provider value={authinfo}>{children}</authocontext.Provider>
  );
};

export default Authprovider;
