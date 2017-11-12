
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import CartSummary from "../components/CartSummary";
import * as actions from "../state/actions";

function getTotal(items){

    let count = 0;
    let amount = 0;

    for(let item of items){
        count += item.qty;
        amount += item.qty * item.price;
    }

    return {
        count : count,
        amount : amount
    }

}

const mapStateToProps = (state) => {

    let result = getTotal(state.cartItems);

    return {
         count : result.count,
         amount : result.amount
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (CartSummary)