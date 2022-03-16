import React from "react";
import axios from "axios";

export default class AddNew extends React.Component {

    state = {
        newRecipeTitle: "",
        newIngredients: [],
        newIngredientAdded: ""
    }

    BASE_API_URL = "https://8888-jerrysuper123-dwadrecipe-mmoktr0bmn8.ws-us34.gitpod.io/";

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //modify value in an array
    updateIngredient = (index, newValue) => {
        this.setState({
            newIngredients: [
                ...this.state.newIngredients.slice(0, index),
                newValue,
                ...this.state.newIngredients.slice(index + 1)
            ]
        })
    }


    // addNewIngredient = () => {
    //     this.setState({
    //         newIngredients: [...this.state.newIngredients, this.state.newIngredientBeingAdded],
    //         newIngredientBeingAdded: ''
    //     })
    // }

    // addNewRecipe = async () => {
 
    //     let response = await axios.post(this.BASE_API_URL + 'recipes', {
    //         'title': this.state.newRecipeTitle,
    //         'ingredients': this.state.newIngredients
    //     })

    //     // to access the props, use this.props
    //     this.props.processAddNewRecipe(response.data[0]); 
    // }

    addNewIngredient = () => {
        //use mongodb to generate id instead of taking id from api, app will load faster
        //below will post to db and get object id there, it is slower
        this.setState({
            newIngredients: [...this.state.newIngredients, this.state.newIngredientAdded],
            newIngredientAdded:""
        })
    }

    addNewRecipe = async () => {
        // this.props.processAddNewRecipe({
        //     "_id": Math.floor(Math.random() * 11000),
        //     "title": this.state.newRecipeTitle,
        //     "ingredient": this.state.newIngredients
        // })

        let response = await axios.post(this.BASE_API_URL + "recipes", {
            "title": this.state.newRecipeTitle,
            "ingredient": this.state.newIngredients
        })

        this.props.processAddNewRecipe(response.data[0]);
    }
    
    // addNewRecipe = async () => {
 
    //     let response = await axios.post(this.BASE_API_URL + 'recipes', {
    //         'title': this.state.newRecipeTitle,
    //         'ingredients': this.state.newIngredients
    //     })

    //     // to access the props, use this.props
    //     this.props.processAddNewRecipe(response.data[0]); 
    // }
    render() {
        return (
            <React.Fragment>
                <h1>Add new recipe</h1>
                <div>
                    <label>title:</label>
                    <input
                        type="text"
                        name="newRecipeTitle"
                        value={this.state.newRecipeTitle}
                        onChange={this.updateFormField}
                    />
                </div>
                <h2>Ingredients</h2>
                {/* dynamic array input */}
                <div>
                    <input type="text"
                        name="newIngredientAdded"
                        value={this.state.newIngredientAdded}
                        onChange={this.updateFormField}

                        //what if users want to enter
                        onKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                this.addNewIngredient()
                            }
                        }}
                    />
                    <button
                        onClick={this.addNewIngredient}
                    >Add ingredient</button>
                </div>

                {this.state.newIngredients.map((ingredient, index) => {
                    return (
                        <div key={index}>
                            <input type="text" value={this.state.newIngredients[index]}
                                onChange={(evt) => {
                                    this.updateIngredient(index, evt.target.value)
                                }}
                            />
                        </div>
                    )
                }
                )}
                <button
                    className="mt-3 btn btn-primary"
                    onClick={this.addNewRecipe}
                >Add new recipe</button>
            </React.Fragment>
        );
    }
}