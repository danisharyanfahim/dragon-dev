import React from "react";

const Circle = ({
  size,
  xPos,
  yPos,
}: {
  size: string;
  xPos: string;
  yPos: string;
}) => {
  return (
    <div
      className="shape circle"
      style={{ top: yPos, left: xPos, height: size, width: size }}
    ></div>
  );
};

export default Circle;
