import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("Cart List should update");
        console.log("Cart List Next Props : ", nextProps);
        console.log("Cart List Props : ", this.props);

        if(nextProps.items != this.props.items)
        {
                return true; // call render method
        }

        return false; // do not call render method
    }

    render() {

        console.log("Cart List render");
        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
      
                {
                    items.map ( item => (
                        <CartItem key={item.id} 
                                item={item}
                                onRemove={this.props.onRemove}>
                        </CartItem>
                    ))
                }

                </tbody>
            </table>


            </div>
        )
    }
} 


CartList.defaultProps = {
    items: []
}

CartList.propTypes = {
    items: PropTypes.array
}