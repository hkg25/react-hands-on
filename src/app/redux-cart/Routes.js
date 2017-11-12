
import React from "react";
import {Route,Switch} from "react-router-dom";
import CartHome from "./components/CartHome";
import Cart from "./containers/Cart";
//import Checkout from "./containers/Checkout";
import ProductList from "./containers/ProductList";
 

export default function Routes(props) {
    return (
        <CartHome>
            <Switch>
                <Route path="/cart/cart-list" component={Cart}></Route>
                <Route path="/cart/products" component={ProductList}></Route>
                {/* <Route path="/cart/checkout" component={Checkout}></Route>  */}
            </Switch>
        </CartHome>
    )
}
