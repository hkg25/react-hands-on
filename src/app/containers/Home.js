// creating container component
import {connect} from "react-redux";
import Home from "../components/Home";


// state ? state = store.getState()
function mapStateToProps(state) {
    return {
        // propertyname : stateValue
        counter : state.counter
    }
}

// dispatch ==> store.dispatch
function mapDispatchToProps(dispatch){
    return {
        //propName : function(){}
        onIncrement : function(value) {
            dispatch({ type : "INCREMENT",
                       payload : {
                          value : value
                       }
                    })
        }
    }
}

// order of parameters matters here
let connectFn = connect(mapStateToProps,
                        mapDispatchToProps);

// create a container
// Pure component => should implement shouldComponentUpdate method
let HomeContainerComponent = connectFn(Home);

export default HomeContainerComponent;