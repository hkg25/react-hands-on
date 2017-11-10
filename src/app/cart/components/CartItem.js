import React, {Component} from "react";
import PropTypes from "prop-types";


export default class CartItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    componentWillReceiveProps(props) {

    }
    
    componentDidMount() {
        
    }
    
    render() {
        let item = this.props.item;
        console.log("CartItem render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                
                <td>{item.price}</td>

                <td>
                   <input value={item.qty}
                          type="number"
                          onChange = { () => {}}
                    />
                </td>

                <td>{item.price * item.qty}</td>
                
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