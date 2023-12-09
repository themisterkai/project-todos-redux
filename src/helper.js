export const generateNewToDo = title => {
  return {
    id: 'uuid',
    isCompleted: false,
    date: new Date(),
    title,
  };
};
