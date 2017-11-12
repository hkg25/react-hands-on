
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "../components/Header";
import {emptyCart}  from "../redux-cart/state/actions";


const mapStateToProps = (state) => {
    return {
         count: state.cartItems.length,
         productCount: state.product.products.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emptyCart: bindActionCreators(emptyCart, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Header)