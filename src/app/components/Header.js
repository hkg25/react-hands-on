import React,{Component} from "react";

import {NavLink} from "react-router-dom";

export default class Header extends Component{
    // props ==> properties
    constructor(props){
        super(props);
        console.log("Header created");
        console.log("Props is cons",props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                {/*children is keyword and will provide the children*/}
                {this.props.children}
                {/* todo : navigation */}    
                <NavLink to="/" exact className="button" activeClassName="success"> Home </NavLink>
                <NavLink to="/cart" className="button" activeClassName="success"> Cart </NavLink>
                <NavLink to="/not-found-here" className="button" activeClassName="success"> Not Found </NavLink>
            </div>
        )
    }
}