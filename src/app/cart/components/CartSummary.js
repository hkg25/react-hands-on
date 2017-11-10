import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);

    }

    //called for every parent render
    componentWillReceiveProps(nextProps){
        console.log("Summary will receive",nextProps);
        console.log("Summary current props ",this.props);
    }

    //called for every parent render
    //called for every current this.setState
    //return true  ==> call render method
    //return false ==> no call to render method
    shouldComponentUpdate(nextProps,nextState){
        console.log("Cart Summary should update");

        if(nextProps.amount != this.props.amount || 
            nextProps.count != this.props.count )
        {
                return true; // call render method
        }

        return false; // do not call render method
    }
    
    componentDidMount() {
        
    }


    
    render() {
        console.log("Cart Summary render");
        return (
            <div>
            <h2>Cart Summary</h2>

            <h2>Total {this.props.amount}</h2>
            <h2>Count  {this.props.count}</h2>

            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}