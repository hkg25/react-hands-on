
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         products : state.product.products,
         loading : state.product.loading,
         error : state.product.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)