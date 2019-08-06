import React, { useContext, useState } from "react";
import { TodoContext } from "../todosContext";
import { useSpring, animated } from "react-spring";
import moment from "moment";

const TodoItem = ({ props }) => {
  const { id, body, createdAt, completed, completedAt } = props;
  const [checked, setChecked] = useState(completed);
  const [state, setState] = useContext(TodoContext);

  const handleChange = () => {
    const tempState = [...state];
    tempState.find(item => item.id === id).completed = !checked;
    tempState.find(item => item.id === id).completedAt = !checked
      ? new Date().toISOString()
      : null;
    setState(tempState);
    setChecked(!checked);
  };

  return (
    <div className="todo">
      <p className="todoText">{body}</p>
      <p className="todoTime">
        ⏱ {moment(createdAt.toString()).fromNow()}{" "}
        {completedAt
          ? `| ✅ ${moment(completedAt.toString()).fromNow()}`
          : null}
      </p>

      <label className="majesticCheckbox">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span>
          <i />
        </span>
      </label>
    </div>
  );
};

export default TodoItem;
