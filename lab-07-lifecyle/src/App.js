import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Child from "./child";
class App extends React.Component {
  constructor() {
    super(); //call the parent class constructor before render so the state is not ready
    console.log("App constructor is called");
  }

  state = {
    number: 0,
  };
  render() {
    console.log("App render is called");
    return (
      <div>
        <h1>Hello </h1>
        <Child />
      </div>
    );
  }

  componentDidMount() {
    // component did mount will only be called once
    //use axios to call API (after render, )
    console.log("App component did mount is called");
  }
}

export default App;
