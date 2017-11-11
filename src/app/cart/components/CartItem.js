import React, {Component} from "react";
import PropTypes from "prop-types";


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quantity : props.item.qty
        }
    }

    componentWillReceiveProps(props) {

    }
    
    componentDidMount() {
        // input is real DOM reference
        this.input.focus();
    }

    onValueChange(e){
        console.log("Cart Item quantity change event : ", e);
        // target is Real dom input element
        let target = e.target;
        console.log("udpated value :" , target.value);

        this.setState({
            quantity : target.value
        });
    }

    render() {
        let item = this.props.item;
        console.log("CartItem render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                
                <td>{item.price}</td>

                 {/*Using ref to access real dom in react*/}
                <td>
                   <input value={this.state.quantity}
                          type="number"
                          ref={(domElement) => this.input = domElement}
                          onChange = { (e) => this.onValueChange(e)}
                    />
                </td>

                <td>{item.price * this.state.quantity}</td>
                
                <td>
                    <button onClick={() => {} }   >
                        Update
                    </button>
                </td>

                <td>
                    <button onClick={() => this.props.onRemove(item.id) }>
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