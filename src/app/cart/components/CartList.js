import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
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
                                item={item}>
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