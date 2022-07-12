import React from 'react';
import './editTaskPopup.css';

function EditTaskPopup({isOpen, taskToEditTitle, taskId, onClose, onUpdateTask}) {

  const [taskTitle, setTaskTitle] = React.useState(taskToEditTitle);

  function handleInputChange(e) {
    setTaskTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateTask({
      taskTitle,
      taskId
    });
  }

  React.useEffect(() => {
    setTaskTitle(taskToEditTitle);
  }, [taskToEditTitle, isOpen]);


  return (
    <section
      className={`popup${isOpen ? " popup_is-opened" : ""}`}
    >
      <form
        className={"popup__form"}
        onSubmit={handleSubmit}
      >
        <button
          className="popup__closeButton"
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
        ></button>
        <h2 className="popup__title">Отредактируйте задачу</h2>
        <fieldset className="popup__fieldset">
          <input
            type="text"
            id="inputName"
            className="popup__input"
            name="taskTitle"
            placeholder="Название задачи"
            required
            value={taskTitle}
            onChange={handleInputChange}
          />
          <button type="submit" className="popup__submitButton">Сохранить</button>
        </fieldset>
      </form>
    </section>
  );
}

export default EditTaskPopup;