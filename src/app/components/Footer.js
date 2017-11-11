import React from "react";
import PropTypes from "prop-types";


//functional component
//presentational component
//stateless component (no state is available)
export default function Footer(props){
    return(
        <div>
            <hr/>
            Copyright@{props.year}, {props.company}
            {props.children}
            {/* Javascript expression not statements*/}
            {10*100}
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