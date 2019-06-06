import React from "react";
import "./App.css";
function Tweet(props){
    const {name,messege} = props
    return(
        <div className="tweet">
            <h1>{name}</h1>
            <p>{messege}</p>
            <h3>number of likes</h3>
        </div>

    );
}
export default Tweet;