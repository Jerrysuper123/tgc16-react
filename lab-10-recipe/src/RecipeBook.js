import React from "react";
import Listing from "./Listing";
import AddNew from "./AddNew";
import axios from "axios";

export default class RecipeBook extends React.Component{
    state={
        active: "recipe",
        data:[]
    }

    BASE_API_URL="https://8888-jerrysuper123-dwadrecipe-mmoktr0bmn8.ws-us34.gitpod.io/";
    async componentDidMount(){
        let response = await axios.get(this.BASE_API_URL+"recipes");
        this.setState({
            data: response.data
        })
    }

    renderPage(){
        if(this.state.active==="recipe"){
            return <Listing data={this.state.data}/>
        } else if(this.state.active==="add"){
            return <AddNew processAddNewRecipe={this.addRecipe}/>
        }
    }

    setActive=(page)=>{
        this.setState({
            active: page
        })    
    }

    //the new recipe should be object with _id, title and ingredient
    addRecipe=(newRecipe)=>{
        this.setState({
            data: [...this.state.data, newRecipe],
            active: "recipe"
        })
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