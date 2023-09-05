<<<<<<< HEAD
const initialState = null

const userReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SIGNIN": 
            return action.payload

        case "SIGNUP": 
            return  action.payload

        case "SIGNOUT": 
            return  action.payload

        default:
            return state
    }
}

=======
const initialState = null

const userReducer = (state = initialState, action) => {
    
    switch(action.type){
        case "SIGNIN": 
            return action.payload

        case "SIGNUP": 
            return  action.payload

        case "SIGNOUT": 
            return  action.payload

        default:
            return state
    }
}

>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
export default userReducer;