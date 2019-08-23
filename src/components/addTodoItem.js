import React, { useState, useContext } from "react";
import { TodoContext } from "../todosContext";
import cogoToast from "cogo-toast";

const AddTodoItem = ({ location, history }) => {
  const [value, setValue] = useState("");
  const [state, setState] = useContext(TodoContext);

  const updateTodos = e => {
    e.preventDefault();
    if (!value.replace(/\s+/, "").length) {
      cogoToast.error(`Input field must not be empty!`, {
        renderIcon: () => (
          <span role="img" aria-label="Prohibited">
            🚫
          </span>
        ),
        position: "bottom-center",
        onClick: hide => {
          hide();
        }
      });
    } else {
      const newItem = {
        id: new Date().toISOString(),
        body: value.trim(),
        createdAt: new Date().toISOString(),
        completed: false,
        completedAt: null
      };
      setState([...state, newItem]);
      cogoToast.success(`Todo succefully added!`, {
        renderIcon: () => (
          <span role="img" aria-label="Tick">
            ✅
          </span>
        ),
        position: "bottom-center",
        onClick: hide => {
          hide();
        }
      });
      setValue("");
      location.pathname.split("/")[location.pathname.split("/").length - 1] ===
        "done" && history.push("/");
    }
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
