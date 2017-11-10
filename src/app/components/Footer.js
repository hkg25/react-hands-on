import React from "react";


//functional component
// presentational component
//stateless component
export default function Footer(props){
    return(
        <div>
            <hr/>
            Copyright@{props.year}, {props.company}

            {/* Javascript */}
           <br/>
           <br/> {10*100}
        </div>
    )
}