//bootstraping react into browser

import React from "react";
import {render} from "react-dom";

import Routes from "./app/Routes";

import store from "./app/store";

render(<Routes/>,// react app 
        document.getElementById("root") // browser
)       
