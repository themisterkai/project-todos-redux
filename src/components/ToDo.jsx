import { removeToDo, toggleToDo } from '../reducers/toDos';

export const ToDo = ({ toDo }) => {
  const handleToggleToDo = id => {
    dispatch(toggleToDo({ id }));
  };

  const handleRemoveToDo = id => {
    dispatch(removeToDo({ id }));
  };

  return (
    <div className="toDoWrapper">
      <input
        className="toDoCheckbox"
        type="checkbox"
        id={toDo.id}
        checked={toDo.isComplete}
        onChange={() => handleToggleToDo(toDo.id)}
      />{' '}
      <div>{toDo.title}</div>
      <div>{toDo.isCompleted}</div>
      <div>{toDo.date}</div>
      <button className="removeToDoButton" onClick={handleRemoveToDo}>
        Remove To Do
      </button>
    </div>
  );
};
