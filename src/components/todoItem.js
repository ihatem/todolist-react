import React, { useContext, useState } from "react";
import { TodoContext } from "../todosContext";
import TimeAgo from "timeago-react";
import cogoToast from "cogo-toast";
import { Delete } from "@material-ui/icons";

const TodoItem = ({ props }) => {
  const { id, body, createdAt, completed, completedAt, editedAt } = props;
  const [inputValue, setInputValue] = useState(body);
  const [checked, setChecked] = useState(completed);
  const [state, setState] = useContext(TodoContext);

  const handleDelete = () => {
    const tempState = [...state].filter(item => item.id !== id);

    setState(tempState);

    cogoToast.error(`Todo succefully deleted!`, {
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    const tempState = [...state];
    tempState.find(item => item.id === id).body = inputValue.trim();
    tempState.find(item => item.id === id).editedAt = new Date().toISOString();

    setTimeout(() => {
      setState(tempState);
    }, 600);

    cogoToast.info(`Todo succefully edited!`, {
      renderIcon: () => (
        <span role="img" aria-label="Warning">
          ⚠️
        </span>
      ),
      bar: { color: "#ffcc00" },
      position: "bottom-center",
      onClick: hide => {
        hide();
      }
    });
  };

  const handleChange = () => {
    const tempState = [...state];
    tempState.find(item => item.id === id).completed = !checked;
    tempState.find(item => item.id === id).completedAt = !checked
      ? new Date().toISOString()
      : null;

    setTimeout(() => {
      setState(tempState);
    }, 600);

    checked
      ? cogoToast.info(`Todo marked as undone!`, {
          renderIcon: () => (
            <span role="img" aria-label="Warning">
              ⚠️
            </span>
          ),
          bar: { color: "#ffcc00" },
          position: "bottom-center",
          onClick: hide => {
            hide();
          }
        })
      : cogoToast.success(`Todo marked as done!`, {
          renderIcon: () => (
            <span role="img" aria-label="Tick">
              ✅
            </span>
          ),
          bar: { color: "#00b700" },
          position: "bottom-center",
          onClick: hide => {
            hide();
          }
        });

    setChecked(!checked);
  };

  return (
    <div className="todo">
      <div className="todoContent">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="todoText"
          />
        </form>
        <p className="todoTime">
          <span className="timeWrap">
            <span role="img" aria-label="Stopwatch">
              ⏱
            </span>
            <TimeAgo datetime={createdAt.toString()} />{" "}
          </span>
          {completedAt && (
            <span className="timeWrap">
              <span role="img" aria-label="Tick">
                ✅
              </span>
              <TimeAgo datetime={completedAt.toString()} />
            </span>
          )}
          {editedAt && (
            <span className="timeWrap">
              <span role="img" aria-label="Pencil">
                ✏️
              </span>
              <TimeAgo datetime={editedAt.toString()} />
            </span>
          )}
        </p>
      </div>
      <div className="buttons">
        <Delete className="deleteIcon" onClick={handleDelete} />
        <label className="majesticCheckbox">
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span>
            <i />
          </span>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
