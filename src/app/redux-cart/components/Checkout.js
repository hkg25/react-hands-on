
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
    }
    
    componentDidMount() {
        
    }

    handleSubmit() {

    }

    onValueChange(e) {
        let target = e.target;

        //Destructure ES6
        let {name, value} = target;
        console.log(name, value);

        this.setState({
            [name] : value
        })

    }
    
    render() {
        return (
            <div> 
            <h2>Checkout</h2>

            <form onSubmit={ ()=> this.handleSubmit()}>
            
                First Name
                <input name="firstname" 
                       value={this.state.firstname}
                       onChange={ (e) => this.onValueChange(e)}
                />

                <br/>

                Last Name
                <input name="lastname" 
                       value={this.state.lastname}
                       onChange={ (e) => this.onValueChange(e)}
                />

                <br/>

                EMail
                <input name="email" 
                       value={this.state.email}
                       onChange={ (e) => this.onValueChange(e)}
                />
                
                <button type="submit">
                    Checkout
                </button>
            </form>
            </div>
        )
    }
} 


Checkout.defaultProps = {
    
}

Checkout.propTypes = {
    
}