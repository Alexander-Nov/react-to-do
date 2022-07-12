import React from 'react';
import './Task.css';

function Task(props) {

  function handleSetCheckBox() {
    props.onTaskIsChecked(props.id);
  }

  function handleTaskDelete() {
    props.onDelete(props.id);
  }

  function handleEditTask() {
    props.onTaskEdit(props.title, props.id)
  }

  return (
    <div className={`task ${props.isChecked ? " task_checked" : ""}`}>
      <input
        className="task__checkBox"
        type='checkbox'
        checked={props.isChecked}
        onChange={handleSetCheckBox}
      />
      <p className="task__taskTitle">{props.title}</p>
      <div className="task__btnGroup">
        {!props.isChecked ? (<button className="task__editBtn" onClick={handleEditTask}></button>) : (<></>)}
        <button className="task__deleteBtn" onClick={handleTaskDelete}></button>
      </div>
    </div>

  );
};

export default Task;