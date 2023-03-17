import React from "react";

const BorderLine = ({ width=130, color = "#F75F4E" }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        backgroundColor: color,
        borderRadius: "0px",
        height: "3px",
      }}
    />
  );
};

export default BorderLine;
