import React from "react";
import "./Dot.css";

const Dot = ({ x, y, radius = 10, onMouseDown }) => {
  const style = {
    transform: `translate(${x - radius}px, ${y - radius}px)`
  };

  return <div style={style} className="dot" onMouseDown={onMouseDown} />;
};

export default Dot;
