import React, { useState, useContext } from "react";
import { TodoContext } from "../todosContext";
import nextId from "react-id-generator";

const AddTodoItem = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useContext(TodoContext);

  const updateTodos = e => {
    e.preventDefault();
    const newItem = {
      id: nextId(),
      body: value,
      createdAt: new Date().toISOString(),
      completed: false,
      completedAt: null
    };
    setState([...state, newItem]);
    setValue("");
  };

  return (
    <form className="addTodo" onSubmit={updateTodos}>
      <input
        className="addTodoInput"
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Write your task here..."
      />
      <button className="addTodoBtn" type="submit">
        <span>+</span>
      </button>
    </form>
  );
};

export default AddTodoItem;
