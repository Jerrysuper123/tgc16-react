import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Listing from "./Listing";

class RecipeBook extends React.Component{

    state={
        active: "recipe"
    }

    setActive=(active)=>{
        this.setState({
            active: active
        })
    }

    renderPage(){
        if(this.state.active==="recipe"){
            return <Listing/>
        }
    }
    render(){
        return(
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-items">
                        <button
                        className="nav-link"
                        onClick={()=>{
                            this.setActive("recipe")
                        }}
                        >Recipes</button>
                    </li>

                    <li className="nav-items">
                        <button
                         onClick={()=>{
                            this.setActive("add")
                        }}
                        className="nav-link"
                        >Add new</button>
                    </li>
                </ul>
                {this.renderPage()}
            </div>
        )
    }
}

export default RecipeBook;