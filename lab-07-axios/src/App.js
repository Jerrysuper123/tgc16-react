import React from "react";
import axios from "axios";
class App extends React.Component {
  state = {
    foods: [],
    loaded: false,
  };

  async componentDidMount() {
    //dont put ./ in front
    //food in public folder, no need ./
    let response = await axios.get("food.json");
    // console.log(response.data);
    //do not setState back to back, unless u put await in front of await this.setState()
    this.setState({
      foods: response.data,
      loaded: true,
    });
  }

  renderFood() {
    return this.state.foods.map((el) => <li key={el}>{el}</li>);
  }

  render() {
    return (
      <React.Fragment>
        <h1>my favorite food</h1>
        {this.state.loaded ? <ul>{this.renderFood()}</ul> : <p>...loading</p>}
      </React.Fragment>
    );
  }
}

export default App;
