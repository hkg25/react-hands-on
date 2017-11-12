
import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default class CartHome extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
                <h2>Cart Home</h2>

                <div>
                    <NavLink to="/cart/products" className="button" activeClassName="success" >
                            Products
                    </NavLink>

                    <NavLink to="/cart/cart-list" className="button" activeClassName="success" >
                            Cart
                    </NavLink>

                    <NavLink to="/cart/checkout"  className="button" activeClassName="success" >
                            Checkout
                    </NavLink>
                </div>

                <div>
                    {this.props.children}
                </div>
            
            </div>
        )
    }
} 


CartHome.defaultProps = {
    
}

CartHome.propTypes = {
    
}