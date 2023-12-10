import { useState } from 'react';
import { addToDo } from '../reducers/toDos';
import { generateNewToDo } from '../helper';
import { useDispatch } from 'react-redux';

export const AddToDo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      handleSubmitToDo();
    }
  };

  const handleSubmitToDo = () => {
    const toDo = generateNewToDo(title);
    dispatch(addToDo({ toDo }));
  };

  return (
    <div className="addToDoWrapper">
      <input
        className="addToDoInput"
        type="text"
        onKeyUp={handleKeyUp}
        onChange={e => {
          setTitle(e.target.value.trimStart());
        }}
        value={title}
        data-1p-ignore
      ></input>
      <button className="addToDoButton" onClick={handleSubmitToDo}>
        Add To Do
      </button>
    </div>
  );
};
