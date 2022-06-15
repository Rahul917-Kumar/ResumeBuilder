import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";
import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext();

function GlobalState({ children }) {
  const [alert , setAlert] =useState({
    open:false,
    message:"",
    type:"success"
  })
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setCheck(false);
    //localStorage.removeItem("user");
    return signOut(auth);
  };

  useEffect(() => {
    
    const unsubsribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          //console.log("something");
          localStorage.setItem(
            "userId" , currentUser.uid
          );
          localStorage.setItem("userEmail" , currentUser.email)
          setUser(currentUser);
        } else {
          localStorage.removeItem("userId");
          localStorage.removeItem("userEmail");
          //console.log("null")
          setUser(null);
        }
        return () => {
          unsubsribe();
        };
      },
      []
    );
  });

  return (
    <UserContext.Provider
      value={{ createUser, signIn, logout, user, check, setCheck , alert, setAlert }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default GlobalState;
