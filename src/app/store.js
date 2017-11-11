import {createStore} from "redux";

const INCREMENT = "INCREMENT";


//Reducer functionm
// state is passed as undefined while called by store like counterReducer(undefinded,action)
function counterReducer(state=100,action){
    console.log("counter reducer ", state, action);

    switch (action.type) {
        case INCREMENT : 
            return state + action.payload.value;
        // it will return undefined if we do not put default statement 
        // means state will be lost if we have declared it.
        default:
            return state;
    }
}

//Store
let store =  createStore(counterReducer);

export default store;


//learning
console.log("State ", store.getState());

//Action is an object
let action = {
    type :INCREMENT,
    payload : {
        value : 10
    }
}

store.dispatch(action);

console.log("State after dispatch ", store.getState());