import React from "react";
import Circle from "../shapes/Circle";

const Background = () => {
  return (
    <div className="background-container">
      <Circle size="348px" yPos="245px" xPos="467px" />
      <Circle size="783px" yPos="-300px" xPos="1273px" />
      <Circle size="234px" yPos="540px" xPos="934px" />
      <Circle size="123px" yPos="243px" xPos="1034px" />
      <Circle size="612px" yPos="540px" xPos="1564px" />
      <Circle size="544px" yPos="-139px" xPos="-102px" />
      <Circle size="1044px" yPos="500px" xPos="-300px" />
    </div>
  );
};

export default Background;
