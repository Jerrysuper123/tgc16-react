import React from "react";

export default class AddNew extends React.Component{
    state={
        newTitle:"",
        newIngredients: []
    }

    render(){
        return(
            <React.Fragment>
                <h1>Add new recipe</h1>
            </React.Fragment>
        )
    }
}