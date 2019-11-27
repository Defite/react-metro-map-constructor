import React, { useState } from "react";

import Draggable from "../Draggable";

const MetroMap = () => {
  const [dots, addDots] = useState([]);

  const wrapperStyle = {
    backgroundImage: `url(${require("./metro_new.png")})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%"
  };

  const onHandleClick = event => {
    const { offsetX, offsetY } = event.nativeEvent;

    addDots(prevState => [
      ...prevState,
      {
        x: offsetX,
        y: offsetY
      }
    ]);

    console.log("x: " + offsetX, "y: " + offsetY);
  };

  const renderDots = () => {
    if (!dots.length) {
      return null;
    }

    return dots.map(dot => {
      return <Draggable x={dot.x} y={dot.y} key={`index-${dot.x}_${dot.y}`} />;
    });
  };

  return (
    <div style={wrapperStyle} onClick={onHandleClick}>
      {renderDots()}
    </div>
  );
};

export default MetroMap;
