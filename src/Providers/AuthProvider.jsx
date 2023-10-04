import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( ()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])
   
    const authInfo = {user ,createUser, logOut, signInUser, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;