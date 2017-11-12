import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "../containers/CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
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