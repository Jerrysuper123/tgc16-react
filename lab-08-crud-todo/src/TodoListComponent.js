import React from "react";

class TodoListComponent extends React.Component{
    state={
        "tasks":[
            {
                "id":1,
                "description":"walk the dog",
                "done": false
            },
            {
                "id":2,
                "description": "clean the room",
                "done": false
            },
            {
                "id": 3,
                "description": "shopping",
                "done": false
            }
        ],
        newTaskDescription:"",
        taskIdBeingEdited: 0,
        modifiedTaskDescription:""

    }

    updateFormField=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    /*add */
    addTask=()=>{
        //make sure your data fields are consistent - otherwise it will trigger undefined error;

        //mongo, add ask to mongodb via api
        //mongodb will send bac the id of the newly created task
        //use the id for the state
        let newTask={
            id: Math.floor(Math.random()*100000+9999),
            description: this.state.newTaskDescription,
            done: false
        };

        let clone = [...this.state.tasks, newTask];
        this.setState({
            tasks: clone
        })
    }

    processEditTask=()=>{
        // let clone = this.state.tasks.slice();
        let indexToReplace = this.state.tasks.findIndex(task=>task.id===this.state.taskIdBeingEdited);
        // clone[indexToReplace].description = this.state.modifiedTaskDescription;

        let modifiedTask = {...this.state.tasks[indexToReplace]};
        modifiedTask.description = this.state.modifiedTaskDescription;

        let cloned = [
            ...this.state.tasks.slice(0,indexToReplace),
            modifiedTask,
            ...this.state.tasks.slice(indexToReplace+1)
        ]

        this.setState({
            tasks: cloned,
            // done editing task, the update button disappears
            //render() is re-render again
            //state change => render(){} reruns
            taskIdBeingEdited: 0
        })
    }

    editTask=(taskIdBeingEdited)=>{
        //found the task by id
        let taskBeingEdited = this.state.tasks.find(task=>task.id===taskIdBeingEdited);
        this.setState({
            taskIdBeingEdited: taskIdBeingEdited,
            modifiedTaskDescription: taskBeingEdited.description
        })
    }

    deleteTask=(taskIdBeingDelete)=>{
        let clone = this.state.tasks.slice();
        let indexToDelete = clone.findIndex(task=>task.id===taskIdBeingDelete);
        clone.splice(indexToDelete,1);
        this.setState({
            tasks: clone
        })
    }

    renderNormalTask=(t)=>{
        return <li key={t.id}>
        {t.description}
        <button onClick={
            // below is a closure with mutated argument, to be stored in an array
            ()=>{this.editTask(t.id)}
        }>Edit</button>
        <button onClick={()=>{
            this.deleteTask(t.id)
        }}>Delete</button>
        </li>
    }

    renderEditedTask=(t)=>{
        return     <li key={t.id}>
        <input type="text" 
        name="modifiedTaskDescription"
        value={this.state.modifiedTaskDescription}
        onChange={this.updateFormField} />
        <button onClick={this.processEditTask}>Update</button>
    </li>
    }

    render(){
        /*read */
        let taskJSXs = [];
        for(let t of this.state.tasks){
            //check if the task we are editing if being edited or not
            //if we click edit, state is changed (id=2), below code re-render
            //set list with id to different component
            if(this.state.taskIdBeingEdited !== t.id){
                taskJSXs.push(
                    this.renderNormalTask(t)
                    )
            } else {
                taskJSXs.push(
                    this.renderEditedTask(t)
                )
            }    
        }

        return(
            <React.Fragment>
                <h1>To do list</h1>
                <div>
                    <label>name of tasks</label>
                    <input type="text" value={this.state.newTaskDescription} name="newTaskDescription" onChange={this.updateFormField}/>
                    <button onClick={this.addTask}>add</button>
                </div>
                <ul>{taskJSXs}</ul>
            </React.Fragment>
        );
    }
}

export default TodoListComponent;