import React from "react";
import axios from "axios";

export default class Listing extends React.Component{
    state={
        data:[]
    }

    BASE_API_URL = "https://8888-jerrysuper123-dwadrecipe-mmoktr0bmn8.ws-us34.gitpod.io/"
    async componentDidMount(){
        let response = await axios.get(this.BASE_API_URL+"recipes");
        this.setState({
            data: response.data
        })
    }
    render(){
        return(
            <React.Fragment>
                {this.state.data.map(r=>{
                    return(
                        <div className="card">
                            <div className="card-body">
                                <h4>Ingredients:</h4>
                                {
                                    r.ingredient.map((i,index)=><li key={index}>{i}</li>)
                                }
                            </div>
                        </div>
                    );
                }

                )}
            </React.Fragment>
        );
    }
}