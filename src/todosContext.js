import React, { useState, createContext } from "react";
import nextId from "react-id-generator";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [state, setState] = useState([
    {
      id: nextId(),
      body: "Buy fruits 🍑",
      createdAt: new Date().toISOString(),
      completed: false,
      completedAt: null
    },
    {
      id: nextId(),
      body: "Play Basketball 🏀",
      createdAt: new Date().toISOString(),
      completed: false,
      completedAt: null
    },
    {
      id: nextId(),
      body: "Do homework 💼",
      createdAt: new Date().toISOString(),
      completed: true,
      completedAt: new Date().toISOString()
    },
    {
      id: nextId(),
      body: "Pet the dog 🐶",
      createdAt: new Date().toISOString(),
      completed: true,
      completedAt: new Date().toISOString()
    }
  ]);

  return (
    <TodoContext.Provider value={[state, setState]}>
      {props.children}
    </TodoContext.Provider>
  );
};
