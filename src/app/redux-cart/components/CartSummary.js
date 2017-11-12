import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
    }

    //called for every PARENT render
    componentWillReceiveProps(nextProps) {
        console.log("summary will receive", nextProps);
        console.log("summary current props ", this.props);
    }

    //return true or false
    //called for every PARENT render
    //called for every   this.setState
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Cart summary should update");

    //     if (nextProps.amount != this.props.amount || 
    //         nextProps.count != this.props.count
    //        ) {
    //            return true; //this calls render
    //        }

    //     return false; //do not call render
    // }
    
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