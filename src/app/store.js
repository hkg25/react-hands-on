import {createStore,combineReducers,applyMiddleware} from "redux";
import cartReducer from "./redux-cart/state/reducers/cartReducer"

import {logger} from "./middlewares";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";


// Reducer functionm
// state is passed as undefined while called by store like counterReducer(undefinded,action)
// state is manipulated by reducer
function counterReducer(state=100,action){
    console.log("counter reducer ", state, action);

    switch (action.type) {
        case INCREMENT : 
            return state + action.payload.value;
        case DECREMENT : 
            return state + action.payload.value;
        case RESET :
            return 0;
        // it will return undefined if we do not put default statement 
        // means state will be lost if we have declared it.
        default:
            return state;
    }
}


// Add multiple reducer as key value pair
let rootReducer = combineReducers({
    // state name : reducer function
    counter : counterReducer,
    cartItems : cartReducer
    //product : productReducer
})

//Store
//call reducer with @@redux/INIT to initialize default state
let store =  createStore(rootReducer, 
                        applyMiddleware(logger));

export default store;

