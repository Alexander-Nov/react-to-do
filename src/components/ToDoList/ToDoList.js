import React from 'react';
import Task from "../Task/Task";
import './toDoList.css';

function ToDoList({
                    taskListName,
                    tasks,
                    isChecked,
                    onTaskDelete,
                    onTaskIsChecked,
                    onTaskDeleteFromDoneList,
                    onTaskIsUncheckedFromDoneList,
                    onTaskEdit
                  }) {

  if (tasks.length == 0) {
    return <></>;
  } else {
    return (
      <div className="toDoList">
        <h2>{taskListName}</h2>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            isChecked={isChecked}
            onDelete={isChecked ? onTaskDeleteFromDoneList : onTaskDelete}
            onTaskIsChecked={!isChecked ? onTaskIsChecked : onTaskIsUncheckedFromDoneList}
            onTaskEdit={onTaskEdit}
          />
        ))}
      </div>
    )
  }
}

export default ToDoList;