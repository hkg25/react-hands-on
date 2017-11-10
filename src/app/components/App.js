import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

var divStyle = {
    color: 'red',
};

export default class App extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            show : true
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
                <Header title="React App Header1"/>

                <Header title="React App Header2"/>

                <button onClick={ (e) => this.showHide(e)}>Show/Hide </button>

                {
                   this.state.show && <Home start={100}/>
                }

            {/**
             *  Pass by value means as a number
             *  year="2017" it will be passed as string
             */}
                <Footer year={2017} 
                        company="React App Footer1"/> 

                <Footer year={2015} 
                        company="React App Footer2"/>   
             </div> 
        )
    }
}