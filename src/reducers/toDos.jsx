import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDos: [],
};

export const toDos = createSlice({
  name: 'historical',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const { toDo } = action;
      state.toDos.push(toDo);
    },
    toggleToDo: (state, action) => {
      const { id } = action.payload;
      const selectedTodo = state.toDos.find(toDo => toDo.id === parseInt(id));
      selectedTodo.isComplete = !selectedTodo.isComplete;
    },
    removeToDo: (state, action) => {
      const { id } = action.payload;
      const newToDo = state.toDos.filter(toDo => toDo.id !== parseInt(id));
      state.toDos = newToDo;
    },
  },
});

export const { addToDo, toggleToDo, removeToDo } = toDos.actions;
