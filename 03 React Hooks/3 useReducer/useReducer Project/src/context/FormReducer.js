export const INITIAL_STATE = {
        title: "",
        desc: "",
        price: 0,
        category: "",
        tags: [],
        image: {
          sm: "",
          md: "",
          lg: "",
        },
        quantity: 0,
}

export const formReducer = (state, action) =>{
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state, 
                [action.payload.name]: action.payload.value
            };
        case "ADD_TAG":
            return {
                ...state,
                tags: [...state.tags, action.payload]
            };
        case "REMOVE_TAG":
            return {
                ...state,
                tags: state.tags.filter((tag) => tag !== action.payload)
            };
        case "INCREMENT":
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case "DECREMENT":
            return {
                ...state,
                quantity: state.quantity -1
            };
    
        default:
            return state;
    }
}
