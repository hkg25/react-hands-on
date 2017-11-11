//React redux part
import React,{Component} from "react";

export default class Home extends Component{

    constructor(props){
        console.log("Constructor called");
        super(props);
    }

    increment(){
        this.props.onIncrement(1);        
    }

    componentWillMount(){
        console.log("componentWillMount called");
    }

    componentDidMount(){
      this.handle =  setInterval(()=> {
            this.increment();
            console.log("Timer running");
        },2000);

   }

    componentWillUnmount(){ 
        console.log("componentWillUnmount called");
        clearInterval(this.handle);
    }

    render(){

         return (
            <div>
                <h2>Counter : {this.props.counter} </h2>
                {/*onClick keyword*/}
                <button onClick={() => this.increment()}> Increment </button>
            </div>
         )        
    }

} 