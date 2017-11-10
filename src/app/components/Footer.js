import React from "react";
import PropTypes from "prop-types";


//functional component
// presentational component
//stateless component
export default function Footer(props){
    return(
        <div>
            <hr/>
            Copyright@{props.year}, {props.company}

            {/* Javascript expression not statements*/}
           <br/>
           <br/> {10*100}
        </div>
    )
}

//Keyword propTypes
Footer.propTypes = {
    year : PropTypes.number.isRequired,
    company : PropTypes.string
}

//default value
Footer.defaultProps = {
    company :"Product App"
}