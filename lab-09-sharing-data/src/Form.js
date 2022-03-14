import React from "react";

export default function Form (props){
        return(
            <React.Fragment>
                <input type="text" name="name" value={props.name} onChange={props.updateFormField}/>
                <input type="text" name="email" value={props.email} onChange={props.updateFormField}/>
                <button>Register</button>
            </React.Fragment>
        )
}