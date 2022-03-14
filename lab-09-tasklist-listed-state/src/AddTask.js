import React from "react";


export default function AddTask(props){
    return (
        <React.Fragment>
            <div>
                <label>Task name:</label>
                <input type="text" name="newTaskDescription" value={props.newTaskDescription}
                onChange={props.updateFormField}
                />
                <button onClick={props.addTask}>Add</button>
            </div>
        </React.Fragment>
    );
}