import { createContext, useState } from 'react';

export const ToDoListContext = createContext();

const initialToDoList = [
  { id: 1, text: 'Buy cat food' },
  { id: 2, text: 'Feed the cat' },
];

export function ToDoListContextProvider({ children }) {
  const [toDoList, setToDoList] = useState(initialToDoList);

  function deleteToDoItem(id) {
    setToDoList((toDoList) =>
      toDoList.filter((toDoItem) => toDoItem.id !== id)
    );
  }

  function addToDoItem(toDoText) {
    const toDoItem = {
      id: toDoList.length + 1,
      text: toDoText,
    };
    setToDoList((toDoList) => [...toDoList, toDoItem]);
  }

  return (
    <ToDoListContext.Provider
      value={{
        toDoList: toDoList,
        deleteToDoItem,
        addToDoItem,
      }}
    >
      {children}
    </ToDoListContext.Provider>
  );
}
