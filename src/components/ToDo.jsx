import { useDispatch } from 'react-redux';
import { removeToDo, toggleToDo } from '../reducers/toDos';

export const ToDo = ({ toDo }) => {
  const dispatch = useDispatch();
  const handleToggleToDo = id => {
    dispatch(toggleToDo({ id }));
  };

  const handleRemoveToDo = id => {
    dispatch(removeToDo({ id }));
  };

  return (
    <div className="toDoWrapper">
      {toDo != null && (
        <>
          <input
            className="toDoCheckbox"
            type="checkbox"
            id={toDo.id}
            checked={toDo.isComplete}
            onChange={() => handleToggleToDo(toDo.id)}
          />{' '}
          <div>{toDo.title}</div>
          <div>{toDo.isComplete.toString()}</div>
          <div>{new Date(toDo.date).toISOString()}</div>
          <button
            className="removeToDoButton"
            onClick={() => handleRemoveToDo(toDo.id)}
          >
            Remove To Do
          </button>
        </>
      )}
    </div>
  );
};
