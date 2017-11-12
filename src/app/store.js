import {createStore,combineReducers} from "redux";

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
    //cartItems : cartReducer
    //product : productReducer
})

//Store
//call reducer with @@redux/INIT to initialize default state
let store =  createStore(rootReducer);

export default store;


//--------------------learning -------------------------

//subscribe take callback function as param
// called after each dispatch execution

store.subscribe(function callback(){
    console.log("Subscribe");
});

// component did mount
let unsubscripeFn  = store.subscribe(function callback(){
    console.log("Subscribe 2");
});

// componenet will unmount
unsubscripeFn();

console.log("State ", store.getState());

// Action is an object
// type is a keyword
// payload is not a keyword. It is conventional/best practice.we can use value:10 directly
// instead of payload 
// type should be unique across the application
let action = {
    type :INCREMENT,
    payload : {
        value : 10
    }
}

//action creator
//helper to create actions
function decrementAction(value){
    return  {
        type :INCREMENT,
        payload : {
            value : value
        }
    }
}

console.log("Dispatch increment 10 ");
// Dispatch 
// calls the reducer
store.dispatch(action);
console.log("State after dispatch ", store.getState());

console.log("Dispatch Unknown type");
store.dispatch({type:"UNKNOWN"});

//console.log("counter value is " , store.getState().counter);

action = decrementAction(1);
//action => {type:"DECREMENT",payload:{value:1}}
store.dispatch(action);

store.dispatch(decrementAction(2));
