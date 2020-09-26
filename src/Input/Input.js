import React from "react";
import { spaceOutOperators } from "../util"
import "./Input.scss";

const Input = ({ input }) => {
  const getFontSize = () => {
    if (input.length > 9) return 1.8;
    if (input.length > 5) return 3;
    return 5;
  };

  return (
    <div id="display" className="input" style={{fontSize: `${getFontSize()}rem`}}>
      {spaceOutOperators(input)}
    </div>
  );
};

export default Input;
