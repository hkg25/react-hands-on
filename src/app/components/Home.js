import React,{Component} from "react";


// No data binding in react

export default class Home extends Component{

    constructor(props){
        super(props);

        //keyword
        //mutate/change data
        //initialize the state from props
        this.state = {
            counter : props.start || 0 
        }
    }

    increment(){
        //keyword
        //calls render method
        this.setState({
            counter : this.state.counter + 1
        });

        //keyword 
        //bad way
        //this.state.counter++;
        //console.log("counter ", this.state.counter);

        //calls render method
        //this.forceUpdate();
    }

    render(){
         return (
            <div>
                <h2>Counter : {this.state.counter} </h2>

                {/*onClick keyword*/}
                <button onClick={() => this.increment()}> Increment </button>
            </div>
         )        
    }

} 