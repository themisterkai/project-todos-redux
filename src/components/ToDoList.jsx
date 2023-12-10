import { useSelector } from 'react-redux';
import { ToDo } from './ToDo';

export const ToDoList = () => {
  const toDos = useSelector(state => state.toDos.toDos);

  return (
    <div className="toDoListWrapper">
      {toDos.map(toDo => (
        <ToDo key={toDo.id} toDo={toDo} />
      ))}
    </div>
  );
};
