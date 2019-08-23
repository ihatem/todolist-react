import React, { createContext } from "react";
import { useLocalStorage } from "react-use-storage";

const initalTodos = [
  {
    id: new Date().toISOString(),
    body: "Buy fruits 🍑",
    createdAt: new Date().toISOString(),
    completed: false,
    completedAt: null,
    editedAt: null
  },
  {
    id: new Date().toISOString(),
    body: "Play Basketball 🏀",
    createdAt: new Date().toISOString(),
    completed: false,
    completedAt: null,
    editedAt: null
  },
  {
    id: new Date().toISOString(),
    body: "Do homework 💼",
    createdAt: new Date().toISOString(),
    completed: true,
    completedAt: new Date().toISOString(),
    editedAt: null
  },
  {
    id: new Date().toISOString(),
    body: "Pet the dog 🐶",
    createdAt: new Date().toISOString(),
    completed: true,
    completedAt: new Date().toISOString(),
    editedAt: null
  }
];

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [value, setValue] = useLocalStorage("key", initalTodos);

  return (
    <TodoContext.Provider value={[value, setValue]}>
      {props.children}
    </TodoContext.Provider>
  );
};
