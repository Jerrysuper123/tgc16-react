import React from "react";

export default class TodoList extends React.Component {
  state = {
    tasks: ["wash car", "clean room", "do laundry"],
  };

  renderTodo() {
    let todos = [];
    for (let t of this.state.tasks) {
      // { } is inside jsx, to rep js
      let e = <li>{t}</li>;
      todos.push(e);
    }
    return todos;
  }

  renderTodoV2() {
    //map f is specially built for this
    let todos = this.state.tasks.map((el) => <li>{el}</li>);
    return todos;
  }
  render() {
    // let todos = [<li>car</li>, <li>clean</li>, <li>laundry</li>];
    //you can set up variables in side render f

    return <React.Fragment>{this.renderTodoV2()}</React.Fragment>;
  }
}
