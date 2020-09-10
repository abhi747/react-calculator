import React from "react";
import "./Button.scss";

const Button = ({ isZero, children }) => {
    const isOperator = (text) => isNaN(text) && text !== ".";
    const isEqual = (text) => text === "=";

    return (
        <div
            className={`button ${isZero ? "zero" : ""} 
            ${isOperator(children) ? "operator" : ""}
            ${isEqual(children) ? "equal" : ""}
            `}
        >
            {children}
        </div>
    );
};

export default Button;
