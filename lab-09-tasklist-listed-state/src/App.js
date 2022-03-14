import React from "react";
import AddTask from "./AddTask";

import TaskList from "./TaskList";

export default class App extends React.Component {

  state={
    tasks:[
      {
        "id":1,
        description: 'clean the room',
        done: false
      },
      {
        "id":2,
        description: 'sweep',
        done: false
      },
      {
        "id":3,
        description: 'mop',
        done: false
      }
    ],
    newTaskDescription: "",
    taskBeingEdited: null,
    modifiedTaskDescription: ""
  }

  updateFormField=(event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  addTask=()=>{
    let newTask = {
      id: Math.floor(Math.random()*1000),
      description: this.state.newTaskDescription,
      done: false
    }

    let clone = [...this.state.tasks, newTask];
    this.setState({
      tasks: clone
    })
  }

  editTask=(task)=>{
    this.setState({
      taskBeingEdited: task,
      modifiedTaskDescription: task.description
    })
  }

  processEditTask=()=>{
    let editedTask= {
      ...this.state.taskBeingEdited,
      description: this.state.modifiedTaskDescription
    }

    let index = this.state.tasks.findIndex(el=>el.id===this.state.taskBeingEdited.id);
    let clone = this.state.tasks.slice();
    clone[index] = editedTask;
    this.setState({
      tasks: clone,
      taskBeingEdited: null
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Task list</h1>
        <TaskList tasks={this.state.tasks}
        modifiedTaskDescription={this.state.modifiedTaskDescription}
        editTask = {this.editTask}
        updateFormField={this.updateFormField}
        taskBeingEdited={this.state.taskBeingEdited}
        processEditTask={this.processEditTask}
        />
        <AddTask newTaskDescription={this.state.newTaskDescription} updateFormField={this.updateFormField} addTask={this.addTask}/>
      </div>
    )
  }
 
}
