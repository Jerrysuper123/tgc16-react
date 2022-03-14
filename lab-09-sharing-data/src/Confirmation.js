import React from "react";

export default function Confirmation(props){
    return(
        <React.Fragment>
            <h1>your registration is being processed</h1>
            <ul>
                <li>name: {props.name}</li>
                <li>email: {props.email}</li>
            </ul>
        </React.Fragment>
    )
}