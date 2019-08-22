import React, { useContext, useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { TodoContext } from "../todosContext";
import TodoItem from "./todoItem";

const config = { duration: 300, mass: 5, tension: 2000, friction: 200 };

const TodosPage = ({ history, location, match, pageName }) => {
  const [loaded, setLoaded] = useState(false);
  const [state] = useContext(TodoContext);
  const filtred = state
    .filter(todo => (pageName === "done" ? todo.completed : !todo.completed))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  const transitions = useTransition(filtred, item => item.id, {
    trail: 150,
    config,
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" }
  });

  return (
    <div className="todos">
      {filtred.length === 0 && (
        <p className="noTodos">{`😕 No todos ${pageName} yet...`}</p>
      )}
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={item.id} style={props}>
            <TodoItem props={item} />
          </animated.div>
        );
      })}
    </div>
  );
};
export default TodosPage;
