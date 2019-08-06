import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Nav = ({ location }) => {
  const [done, setDone] = useState(
    location.pathname.replace("/", "") === "done"
  );

  useEffect(() => {
    setDone(location.pathname.replace("/", "") === "done");
  });

  const props = useSpring({
    transform: `translateX(${done ? "25%" : "-25%"})`
  });

  return (
    <div className="header">
      <h4 className="headTitle">Tasks</h4>
      <div className="switcher">
        <animated.span style={props} className="switchBgActive" />
        <span className="switchBg" />

        <NavLink exact to="/" className="switch" activeClassName="selected">
          Undone
        </NavLink>
        <NavLink to="/done" className="switch" activeClassName="selected">
          Done
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
