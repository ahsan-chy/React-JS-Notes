export const signin = (user, userToken) => {
    return{
        type: "SIGNIN",
        payload: {
            // name: user.displayName,
            email: user.email,
            token: userToken.token
          }
    }
}
export const signup = (user, userToken) => {
    return{
        type: "SIGNUP",
        payload: {
            // name: user.displayName,
            email: user.email,
            token: userToken.token
          }
    }
}

export const signOut = () => {
    return {
        type: "SIGNOUT",
        payload: null
    }
}