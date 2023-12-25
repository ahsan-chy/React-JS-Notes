<<<<<<< HEAD
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
=======
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
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
}