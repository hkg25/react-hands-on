//React redux part
import React,{Component} from "react";

//RX JS
import {Subject} from "rxjs/Subject";

//loading operator from RXJS
import "rxjs/Rx";


export default class Home extends Component{

    constructor(props){
        console.log("Constructor called");
        super(props);

        this.subject = new Subject();
    }

    //RX JS --> action handler
    next() {
        // produce a random number
        let n = Math.ceil(Math.random()*100);
        // publish number through RXJS
        // next is a keyword in RX JS
        this.subject.next(n);
    }

    componentDidMount(){
        // this.handle =  setInterval(()=> {
        //       this.increment();
        //       console.log("Timer running");
        //   },2000);
  
          // subscribe is RXJS function here to subscribe
          this.subject.subscribe( n => {
              console.log("Subscribed 1 " , n);
          });


          // produce 1 second gap in subscribe
          this.subject.debounceTime(1000)
          .subscribe( n => {
            console.log("Subscribed 2 " , n);
            this.props.onIncrement(n); 
        })
  
     }
  

    increment(){
        this.props.onIncrement(1);        
    }

    componentWillMount(){
        console.log("componentWillMount called");
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

                <button onClick={() => this.next()}> Next </button>
            </div>
         )        
    }

} 