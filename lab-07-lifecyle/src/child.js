import React from "react";

export default class Child extends React.Component {
  constructor() {
    super();
    console.log("child constructor called");
  }

  render() {
    console.log("child render is called");

    return <h1>Child</h1>;
  }

  componentDidMount() {
    console.log("child did mount is called");
  }
}
