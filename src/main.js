//bootstraping react into browser

import React from "react";
import {render} from "react-dom";
import App from "./app/components/App";

render(<App/>,// react app 
        document.getElementById("root") // browser
)       
