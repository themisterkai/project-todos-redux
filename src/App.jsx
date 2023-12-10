import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AddToDo } from './components/AddToDo';
import { ToDoList } from './components/ToDoList';
import { loadData } from './reducers/toDos';

export const App = () => {
  const dispatch = useDispatch();

  // always load data from local storage when we load the app
  useEffect(() => {
    dispatch(loadData({}));
  }, []);

  return (
    <div className="appWrapper">
      <h2>.TODO</h2>
      <AddToDo />
      <ToDoList />
    </div>
  );
};
