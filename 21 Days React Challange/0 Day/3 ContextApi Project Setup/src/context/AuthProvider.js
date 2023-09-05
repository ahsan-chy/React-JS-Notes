<<<<<<< HEAD
import React from "react";

export const AuthContext = React.createContext();

export function AuthProvider({children}){
    let[user, setUser] = React.useState(null);
    let[token, setToken] = React.useState(null);

    //onlogin save user and token in context
    const saveAuth = (user, token) => {
        setUser(user)
        setToken(token)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{user, token, saveAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

=======
import React from "react";

export const AuthContext = React.createContext();

export function AuthProvider({children}){
    let[user, setUser] = React.useState(null);
    let[token, setToken] = React.useState(null);

    //onlogin save user and token in context
    const saveAuth = (user, token) => {
        setUser(user)
        setToken(token)
    }

    const logout = () => {
        setUser(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={{user, token, saveAuth, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
