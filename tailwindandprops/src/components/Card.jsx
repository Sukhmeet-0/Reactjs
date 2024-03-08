import React from "react";

// function Card(props){
function Card({username=sukh}){
    return(
        <>
            <div>Card</div>
            <h1>{props.username || sukhmeetsingh}</h1>
        </>
    )
}
export default Card