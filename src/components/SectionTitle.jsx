import React from "react";

const SectionTitle = ({ children, color="#384062" , align="left" , size="36px", leading="36px" }) => {
  return (
    <h2
      className="section_title"
      style={{
        color: color,
        textAlign: align,
        fontSize: size,
        lineHeight: leading,
      }}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
