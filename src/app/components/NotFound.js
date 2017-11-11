
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        return (
            <div> 
            <h2>Not Found</h2>

            <p>Path {props.match.url} not found </p>
            <button onClick={()=>{props.history.push("/")}}> Home </button>
            <button onClick={()=>{props.history.push("/cart")}}> Cart </button>
            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}