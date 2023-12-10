import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDos: [],
};

export const toDos = createSlice({
  name: 'historical',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const { toDo } = action.payload;
      state.toDos.push({ ...toDo });
      localStorage.setItem('to-dos', JSON.stringify(state.toDos));
    },
    toggleToDo: (state, action) => {
      const { id } = action.payload;
      const selectedTodo = state.toDos.find(toDo => toDo.id === id);
      selectedTodo.isComplete = !selectedTodo.isComplete;
      localStorage.setItem('to-dos', JSON.stringify(state.toDos));
    },
    removeToDo: (state, action) => {
      const { id } = action.payload;
      const newToDo = state.toDos.filter(toDo => toDo.id !== id);
      state.toDos = newToDo;
      localStorage.setItem('to-dos', JSON.stringify(state.toDos));
    },
    loadData: state => {
      const toDos = localStorage.getItem('to-dos');
      if (toDos != null) {
        state.toDos = JSON.parse(toDos);
      }
    },
  },
});

export const { addToDo, toggleToDo, removeToDo, loadData } = toDos.actions;
