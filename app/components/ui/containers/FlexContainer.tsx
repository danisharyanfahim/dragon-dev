import React from "react";

const FlexContainer = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="container">
      {children.map((child, index) => {
        return (
          <div key={"container-item" + index} className="container-item">
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FlexContainer;
