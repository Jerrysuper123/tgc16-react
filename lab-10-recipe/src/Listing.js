import React from "react";
//managed component
//does not have state, what it displays depending on the parent
export default function Listing(props) {
    return (
        <React.Fragment>
            <h1>Listing</h1>
            {props.data.map(r => {
                return (
                    <React.Fragment key={r._id}>
                        <div 
                        className="card" 
                        style={{width: "18rem"}}
                        >
                            <div className="card-body">
                                <h4 className="card-title">{r.title}</h4>
                                <div className="card-text">
                                    <h5>ingredient</h5>
                                    <ul>
                                        {
                                    
                                            r.ingredient.map(
                                                (ingredient,index)=>{
                                                   return <li key={index}>{ingredient}</li>
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}


        </React.Fragment>
    );
}