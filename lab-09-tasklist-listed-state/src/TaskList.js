import React from 'react';

export default function TaskList(props){

    function renderTask(){
        return props.tasks.map(task=>{
            if(props.taskBeingEdited!==null && props.taskBeingEdited.id === task.id){
                return <li key={task.id}>
                    <input type="text"
                    name="modifiedTaskDescription"
                    value={props.modifiedTaskDescription}
                    onChange={props.updateFormField}
                    />
                    <button onClick={props.processEditTask}>Confirm</button>
                </li>
            }else {
                return(
                    <li key={task.id}>{task.description}
                    <button onClick={()=>{
                        props.editTask(task)
                    }}>Edit</button>
                    </li>
                );
            }
        
        })
    }

    return (
        <ul>
            {renderTask()}
        </ul>
    );
}

