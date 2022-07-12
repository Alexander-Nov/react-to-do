import '../vendor/normalize.css';
import './App.css';
import React from 'react';
import Header from "./Header/Header";
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import {defaultTasks} from "../utils/initial";
import EditTaskPopup from "./EditTaskPopup/EditTaskPopup";

function App() {

  const [toDoTasks, setToDoTasks] = React.useState(defaultTasks);
  const [doneTasks, setDoneTasks] = React.useState([]);
  const [taskToEditTitle, setTaskToEditTitle] = React.useState("");
  const [taskToEditId, setTaskToEditId] = React.useState("");
  const [popupIsOpened, setPopupIsOpened] = React.useState(false);

  function handlerOnAddNewTask(newTask) {
    setToDoTasks([...toDoTasks, newTask]);
  }

  function handleTaskDelete(taskToDeleteId) {
    const newTasks = toDoTasks.map((t) => t);
    let delPosition = toDoTasks.findIndex(element => element.id === taskToDeleteId);
    newTasks.splice(delPosition, 1);
    setToDoTasks(newTasks);
  }

  function handleTaskDeleteFromDoneList(taskToDeleteId) {
    const newDelTasks = doneTasks.map((t) => t);
    let delPosition = doneTasks.findIndex(element => element.id === taskToDeleteId);
    newDelTasks.splice(delPosition, 1);
    setDoneTasks(newDelTasks);
  }

  function handleTaskIsChecked(taskIsDoneId) {
    const newTasks = toDoTasks.map((t) => t);
    let delPosition = toDoTasks.findIndex(element => element.id === taskIsDoneId);
    const doneTask = newTasks.splice(delPosition, 1);
    setToDoTasks(newTasks);

    let maxId = 0;
    doneTasks.map((task) => {
      if (task.id > maxId) {
        maxId = task.id
      }
    });
    doneTask[0].id = maxId + 1;
    setDoneTasks([...doneTasks, doneTask[0]]);
  }

  function handleTaskIsUncheckedFromDoneList(taskIsDoneId) {
    const newTasks = doneTasks.map((t) => t);
    let delPosition = newTasks.findIndex(element => element.id === taskIsDoneId);
    const uncheckedTask = newTasks.splice(delPosition, 1);
    setDoneTasks(newTasks);

    let maxId = 0;
    toDoTasks.map((task) => {
      if (task.id > maxId) {
        maxId = task.id
      }
    });
    uncheckedTask[0].id = maxId + 1;
    setToDoTasks([...toDoTasks, uncheckedTask[0]]);
  }

  function closePopup() {
    setPopupIsOpened(false);
  }

  function onTaskEdit(taskTitle, taskId) {
    setTaskToEditTitle(taskTitle);
    setTaskToEditId(taskId);
    setPopupIsOpened(true);
  }

  function handleUpdateTask({taskTitle, taskId}) {
    const newTasks = toDoTasks.map((t) => t);
    newTasks.map((task) => {
      if (task.id === taskId) {
        task.title = taskTitle;
      }
    });
    setToDoTasks(newTasks);
    closePopup();
  }

  return (
    <div className="App">
      <Header/>

      <AddNewTask
        tasks={toDoTasks}
        onSubmit={handlerOnAddNewTask}
      />

      <ToDoList
        taskListName="Задачи"
        tasks={toDoTasks}
        isChecked={false}
        onTaskDelete={handleTaskDelete}
        onTaskDeleteFromDoneList={handleTaskDeleteFromDoneList}
        onTaskIsChecked={handleTaskIsChecked}
        onTaskIsUncheckedFromDoneList={handleTaskIsUncheckedFromDoneList}
        onTaskEdit={onTaskEdit}
      />

      <ToDoList
        taskListName="Выполнено"
        tasks={doneTasks}
        isChecked={true}
        onTaskDelete={handleTaskDelete}
        onTaskDeleteFromDoneList={handleTaskDeleteFromDoneList}
        onTaskIsChecked={handleTaskIsChecked}
        onTaskIsUncheckedFromDoneList={handleTaskIsUncheckedFromDoneList}
      />

      <EditTaskPopup
        isOpen={popupIsOpened}
        taskToEditTitle={taskToEditTitle}
        taskId={taskToEditId}
        onClose={closePopup}
        onUpdateTask={handleUpdateTask}
      />


    </div>
  );
}

export default App;
