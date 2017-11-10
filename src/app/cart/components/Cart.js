import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{id: 1, price: 10, name:'p1', qty: 1}],
            amount: 0,
            count: 0,
            flag: true
        }
    }

    addItem() {

    }

    removeItem(id) {

    }

    updateItem(id, qty) {

    }

    emptyCart() {

    }
   
    refresh() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={()=> this.addItem()}>
                Add Item
            </button>
 
            <button     onClick={()=> this.emptyCart()}   >
                Empty
            </button>


            <button onClick={()=> this.refresh()}>
                Refresh
            </button>
  

            <CartList items = {this.state.items} >
            </CartList>

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}            
            >
            </CartSummary>

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}