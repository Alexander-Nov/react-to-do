import React from 'react';
import './addNewTask.css';

const AddNewTask = ({tasks, onSubmit}) => {

  const [taskTitle, setTaskTitle] = React.useState("");

  const handleAddTask = () => {
    let maxId = 0;
  tasks.map((task) => {
    if (task.id > maxId) {maxId = task.id}
  });
    onSubmit({id: maxId + 1, title: taskTitle});
    setTaskTitle("");
  }

  const handleTaskChange = (e) => {
    setTaskTitle(e.target.value);
  }

  return (
    <div className="addNewTask">
      <p className="addNewTask_title">Добавить задачу:</p>
      <div className="addNewTask_controlGroup">
        <input className="addNewTask__input" value={taskTitle} onChange={handleTaskChange}/>
        <button
          className="addNewTask__button"
          type="button"
          onClick={handleAddTask}
        >
          Добавить
        </button>
      </div>
    </div>

  );
};

export default AddNewTask;