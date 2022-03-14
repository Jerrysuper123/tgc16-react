import React from "react";
import Form from "./Form";
import AlertBox from "./AlertBox";
import Confirmation from "./Confirmation";

class App extends React.Component {
  state={
    email:"",
    name:""
}
  updateFormField = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

   render(){
    return (
      <React.Fragment>
         <AlertBox message="please enter your info"/>
        <Form name={this.state.name} email={this.state.email} updateFormField={this.updateFormField}/>
        <Confirmation
        name={this.state.name}
        email={this.state.email}
        />
      </React.Fragment> 
    );
   }
}

export default App;
