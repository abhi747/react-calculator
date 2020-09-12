import React from "react";
import { isOperator } from "../util";
import "./Button.scss";

const Button = ({ isZero, children, handleClick }) => {
    
    const isEqual = (text) => text === "=";

    return (
        <div
            className={`button ${isZero ? "zero" : ""} 
            ${isOperator(children) ? "operator" : ""}
            ${isEqual(children) ? "equal" : ""}
            `}
            onClick={handleClick}
        >
            {children}
        </div>
    );
};

export default Button;
