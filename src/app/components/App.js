import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Cart from "../cart/components/Cart";

var divStyle = {
    //color: 'red',
};

export default class App extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            show : false
        }
    }

    showHide(e){
        console.log("Event object",e);

        this.setState({
            show : !this.state.show
        });
    }

    //keyword
    //returns a view        
    render() {
        return (
            <div style={divStyle}>
                <Header title="React App Header1">
                    <h2>My Header </h2>
                </Header>    

                {/* <Header title="React App Header2"/> */}

                {/*view container*/}
                <div>
                    {this.props.children}
                </div>

                {/* <button onClick={ (e) => this.showHide(e)}>
                    {this.state.show ?"Hide":"Show"}
                </button>

                {
                   this.state.show && <Home start={100}/>
                }

                <Cart/> */}

            {/**
             *  Pass by value means as a number
             *  year="2017" it will be passed as string
             */}
                <Footer year={"2017"} 
                        company="React App Footer1"/> 

              {/**
             * Will pick default props value defined in Footer.js
             */}
                <Footer year={2015}>
                    <h4>Special Offer</h4>
                </Footer>       
             </div> 
        )
    }
}