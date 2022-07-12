import React from 'react';
import './addNewTask.css';

const AddNewTask = ({tasks, onSubmit}) => {

  const [taskTitle, setTaskTitle] = React.useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
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
    <section className="addNewTask">
      <p className="addNewTask_title">Добавить задачу:</p>
      <form className="addNewTask_controlGroup" onSubmit={handleAddTask}>
        <input className="addNewTask__input" value={taskTitle} onChange={handleTaskChange}/>
        <button
          className="addNewTask__button"
          type="submit"
          disabled={(taskTitle.length > 0) ? false : true}
        >
          Добавить
        </button>
      </form>
    </section>

  );
};

export default AddNewTask;