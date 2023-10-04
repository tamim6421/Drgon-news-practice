import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const auth = getAuth(app)
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;