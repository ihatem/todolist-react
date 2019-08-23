import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Nav = ({ location }) => {
  const [done, setDone] = useState(
    location.pathname.replace("/", "") === "done"
  );

  useEffect(() => {
    setDone(location.pathname.replace("/", "") === "done");
  }, [location]);

  const props = useSpring({
    transform: `translateX(${done ? "25%" : "-25%"})`
  });

  return (
    <div className="header">
      <h4 className="headTitle">Tasks</h4>
      <div className="switcher">
        <animated.span style={props} className="switchBgActive" />
        <span className="switchBg" />

        <NavLink
          exact
          to={`${process.env.PUBLIC_URL}/`}
          className="switch"
          activeClassName="selected"
        >
          Undone
        </NavLink>
        <NavLink
          to={`${process.env.PUBLIC_URL}/done`}
          className="switch"
          activeClassName="selected"
        >
          Done
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
