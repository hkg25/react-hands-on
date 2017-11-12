import React, {Component} from "react";
import PropTypes from "prop-types";


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            qty: props.item.qty
        }
    }

    componentWillReceiveProps(props) {

    }
    
    componentDidMount() {

        //input is REAL DOM reference
        this.input.focus();

        this.mySpan.textContent = "Total"
        
    }

    onValueChange(e) {
        //tartget is REAL DOM input element
        let target = e.target;
        console.log(target.value);

        this.setState({
            qty: target.value
        })
 
    }
    
    render() {
        let item = this.props.item;
        console.log("CartItem render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                
                <td>{item.price}</td>
 
                <td>
                   <input value={this.state.qty}
                          type="number"
                          ref = { (domElement) => this.input = domElement}
                          onChange = { (e) => this.onValueChange(e)}
                    />
 
                </td>

                <td>
                  <span 
                   ref = { spanElement => this.mySpan = spanElement }
                  >
                 </span>
 
                {item.price * item.qty}
                
                </td>
                
                <td>
                    <button onClick={() => {} }   >
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={() => {} }>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
}

CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}