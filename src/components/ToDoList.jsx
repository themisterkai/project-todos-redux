import { useSelector } from 'react-redux';
import { ToDo } from './ToDo';

export const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.toDos);

  return (
    <div className="toDoListWrapper">
      <div className="toDoListCount">
        <span>
          <i>Total: {toDos.length}</i>
        </span>
        {' | '}
        <span>
          <i>
            Remaining To Do: {toDos.filter(todo => !todo.isComplete).length}
          </i>
        </span>
      </div>
      <div className="toDoListToDos">
        {toDos.map(toDo => (
          <ToDo key={toDo.id} toDo={toDo} />
        ))}
      </div>
    </div>
  );
};
