import React from "react";
import "./Input.scss";

const Input = ({ input }) => {
  const getFontSize = () => {
    if (input.length > 10) return 1.8;
    if (input.length > 6) return 3;
    return 5;
  };

  return (
    <div id="display" className="input" style={{fontSize: `${getFontSize()}rem`}}>
      {input}
    </div>
  );
};

export default Input;
