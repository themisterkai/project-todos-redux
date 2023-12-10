import { PropTypes } from 'prop-types';
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
          />
          <label className="toDoCheckboxLabel" htmlFor={toDo.id}>
            {toDo.title}
          </label>
          <div className="toDoDate">
            {new Date(toDo.date).toISOString().split('T')[0]}
          </div>
          <div className="removeToDoButton">
            <span
              class="material-symbols-outlined"
              onClick={() => handleRemoveToDo(toDo.id)}
            >
              delete
            </span>
          </div>
        </>
      )}
    </div>
  );
};

ToDo.propTypes = {
  toDo: PropTypes.object.isRequired,
};
