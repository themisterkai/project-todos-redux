import { useState } from 'react';
import { addToDo } from '../reducers/toDos';
import { generateNewToDo } from '../helper';
import { useDispatch } from 'react-redux';

export const AddToDo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleKeyUp = e => {
    validate(e.target.value);
    if (e.key === 'Enter') {
      handleSubmitToDo();
    }
  };

  const handleSubmitToDo = () => {
    const hasError = validate(title);
    if (!hasError) {
      const toDo = generateNewToDo(title);
      dispatch(addToDo({ toDo }));
    }
  };

  const validate = input => {
    if (input.length < 3) {
      setError('Tasks must be at least 2 characters long');
      return true;
    }
    setError('');
    return false;
  };

  return (
    <div className="addToDoWrapper">
      <div className="addToDoError">{error}</div>
      <input
        className="addToDoInput"
        type="text"
        onKeyUp={handleKeyUp}
        onChange={e => {
          setTitle(e.target.value.trimStart());
        }}
        value={title}
        data-1p-ignore
        placeholder={'enter to do'}
      ></input>
      <button className="addToDoButton" onClick={handleSubmitToDo}>
        Add To Do
      </button>
    </div>
  );
};
