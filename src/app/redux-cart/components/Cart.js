import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }

    addItem() {

        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }
  
        //TODO: add to store
    }

      
    emptyCart() {
        
    }
    
    
    render() {

        console.log("Cart render");

        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
 
            <button     onClick={()=> this.emptyCart()}   >
                Empty
            </button>

 

            <CartList items = {this.state.items}
             >

            </CartList>

            <CartSummary >
            </CartSummary>

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}