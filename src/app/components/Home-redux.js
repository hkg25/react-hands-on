// Solve state issue with redux itself

import React,{Component} from "react";
import store from "../store";
// No data binding in react

export default class Home extends Component{

    constructor(props){
        console.log("Constructor called");
        super(props);
    }

    increment(){
        store.dispatch({
            type :"INCREMENT",
            payload : {
                value : 1
            }
        })        
    }

    componentWillMount(){
        console.log("componentWillMount called");
    }

    componentDidMount(){
      this.handle =  setInterval(()=> {
            this.increment();
            console.log("Timer running");
        },2000);

        this.unsubscribeFn = store.subscribe(()=>{
            this.forceUpdate()
        })
    }

    componentWillUnmount(){ 
        this.unsubscribeFn();
        console.log("componentWillUnmount called");
        clearInterval(this.handle);
    }

    render(){

        //redux state
        let state = store.getState();

         return (
            <div>
                <h2>Counter : {state.counter} </h2>
                {/*onClick keyword*/}
                <button onClick={() => this.increment()}> Increment </button>
            </div>
         )        
    }

} 