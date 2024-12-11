import React from "react";

const FlexContainer = ({
  children,
  containerName,
}: {
  children: React.ReactNode[];
  containerName?: string;
}) => {
  return (
    <div className="container">
      {children.map((child, index) => {
        return (
          <div
            key={"container-item" + index}
            className={`container-item ${containerName}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default FlexContainer;
