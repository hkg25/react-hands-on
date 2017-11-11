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
            count: 1,
            flag: true
        }
    }

    addItem() {

        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            name: 'Product ' + id,
            price: 100 + Math.ceil(Math.random() * 1000),
            qty: 1
        }

        //Bad approach
        //Mutability
        // this.state.items.push(item);

        //Good approach of above one
        //Immutability
        //clone list using spread operator and add new item to cloned one
        let newItems = [...this.state.items,item];

        //Good approach
        //Marge process
        this.setState({
            items : newItems,
            count : newItems.length
        });

    }

    removeItem(id) {

    }

    updateItem(id, qty) {
        
    }

    emptyCart() {

    }
   
    refresh() {
        //dummy method
        this.setState({
            flag:true
        })
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