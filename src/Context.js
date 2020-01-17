import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogged, setLogged] = useState(false)

    return (
        <AuthContext.Provider value={[isLogged, setLogged]}>
            {children}
        </AuthContext.Provider>
    )
}
