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

        // ES5 style
       // this.onRemove = this.removeItem.bind(this);

        //Es6 style : Arrow operator
        this.onRemove = (id) => this.removeItem(id);
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
      let newItems = this.state.items.filter(item => item.id !=id);
      this.setState({
          items : newItems,
          count : newItems.length
      })
    }

    updateItem(id, qty) {

    }

    emptyCart() {
        this.setState({
            items :[],
            count : 0
        })
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
  

            <CartList items = {this.state.items} 
                    onRemove={this.onRemove}>
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