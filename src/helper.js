export const generateNewToDo = title => {
  return {
    id: crypto.randomUUID(),
    isComplete: false,
    date: new Date().getTime(),
    title,
  };
};
