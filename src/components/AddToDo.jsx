import { useState } from 'react';
import { addToDo } from '../reducers/toDos';
import { generateNewToDo } from '../helper';

export const AddToDo = () => {
  const [title, setTitle] = useState();
  // const isBreatheTimerRunning = useSelector(state => state.ToDos);

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      handleSubmitToDo();
    }
  };

  const handleSubmitToDo = title => {
    dispatch(addToDo({ toDo: generateNewToDo(title) }));
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
