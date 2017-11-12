
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.actions.fetchProducts();
    }
    
    render() {
        let products = this.props.products;

        return (
            <div> 
            <h2>Product List</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Year</th>
                        <th>+Cart</th>
                    </tr>
                  
                {
                    this.props.products.map(product => (
                        <tr key={product.id}>
                           <td>{product.name}</td>
                           <td>{product.price}</td>
                           <td>{product.year}</td>
                           <td>
                               <button onClick={() => this.props.addItemToCart(product)}>
                                +Cart
                               </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
            
            </div>
        )
    }
} 


ProductList.defaultProps = {
    products: []
}

ProductList.propTypes = {
    
}