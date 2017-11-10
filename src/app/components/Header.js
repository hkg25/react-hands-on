import React,{Component} from "react";

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
                {/* todo : navigation */}    
            </div>
        )
    }
}