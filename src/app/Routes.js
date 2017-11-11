import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from "./components/App";
import Home from "./containers/Home";
import NotFound from "./components/NotFound";

import Cart from "./cart/components/Cart";


//Route configuration
// Functional component

export default function Routes(props){
    return(
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="*" component={NotFound}/>
                </Switch>    
            </App>    
        </Router>
    )    
}

