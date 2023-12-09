import { ToDo } from './ToDo';

export const ToDoList = () => {
  const toDos = useSelector(state => state.ToDos);

  return (
    <div className="toDoListWrapper">
      {toDos.map(toDo => (
        <ToDo key={toDo.id} />
      ))}
    </div>
  );
};
