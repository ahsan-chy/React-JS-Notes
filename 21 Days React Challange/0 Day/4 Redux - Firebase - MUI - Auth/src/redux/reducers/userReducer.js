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

export default userReducer;