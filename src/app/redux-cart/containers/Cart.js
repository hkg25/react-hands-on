
import {connect} from "react-redux";

import Cart from "../components/Cart";
import * as actions from "../state/actions";

// Call the action function and dispatch the action object.
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => {
   return {
        //items
        items : state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
        //actions, addItem..
        onAddItem : function(item){
            dispatch(actions.addItemToCart(item));
        },

        //use bindActionCreators
        //shorter version of onAddItem
        addItemToCart : bindActionCreators(actions.addItemToCart,
            dispatch)
       }
   }


export default connect(mapStateToProps, 
                   mapDispatchToProps) (Cart)