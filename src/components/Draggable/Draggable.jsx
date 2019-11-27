import React, { useCallback, useEffect, useState } from "react";
import Dot from "../Dot";

const Draggable = ({ x, y }) => {
  const [coords, setCoords] = useState({
    isDragging: false,
    x,
    y
  });

  // mouse move
  const handleMouseMove = useCallback(
    ({ pageX, pageY }) => {
      if (coords.isDragging) {
        console.log("x:" + pageX, "y: " + pageY);
        setCoords(prevState => ({
          ...prevState,
          x: pageX,
          y: pageY
        }));
      }
    },
    [coords.isDragging]
  );

  // mouse left click release
  const handleMouseUp = useCallback(() => {
    if (coords.isDragging) {
      setCoords(prevState => ({
        ...prevState,
        isDragging: false
      }));
    }
  }, [coords.isDragging]);

  // mouse left click hold
  const handleMouseDown = useCallback(() => {
    setCoords(prevState => ({
      ...prevState,
      isDragging: true
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Dot
      x={coords.x}
      y={coords.y}
      isDragging={coords.isDragging}
      onMouseDown={handleMouseDown}
    />
  );
};

export default Draggable;
