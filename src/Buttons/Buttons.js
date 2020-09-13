import React from "react";
import { useEffect } from "react";
import { toggleMinus, popInput, isValidKeyInput } from "../util";
import Button from "../Button/Button";
import "./Buttons.scss";

const Buttons = ({ handleClick, handleEqual, input, setInput }) => {
    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        return () => {
            document.removeEventListener("keydown", keydownHandler);
        }
    });

    const keydownHandler = (event) => {
        if (event.key === "Backspace")
            setInput(popInput(input));
        else if (event.key === "Enter" || event.key === "=")
            handleEqual();
        else if (isValidKeyInput(event.key))
            handleClick(event.key);
    }

    return (
        <div className="buttons-container">
            <div id="buttons-grid" className="buttons-grid">
                <Button handleClick={(_) => setInput("0")}>C</Button>
                <Button handleClick={(_) => setInput(popInput(input))}>&#8592;</Button>
                <Button handleClick={(_) => setInput(toggleMinus(input))}>
                    &#177;
        </Button>

                <Button handleClick={(_) => handleClick("/")}>&#247;</Button>

                <Button handleClick={(_) => handleClick("7")}>7</Button>
                <Button handleClick={(_) => handleClick("8")}>8</Button>
                <Button handleClick={(_) => handleClick("9")}>9</Button>

                <Button handleClick={(_) => handleClick("*")}>&#215;</Button>

                <Button handleClick={(_) => handleClick("4")}>4</Button>
                <Button handleClick={(_) => handleClick("5")}>5</Button>
                <Button handleClick={(_) => handleClick("6")}>6</Button>

                <Button handleClick={(_) => handleClick("-")}>&#8722;</Button>

                <Button handleClick={(_) => handleClick("1")}>1</Button>
                <Button handleClick={(_) => handleClick("2")}>2</Button>
                <Button handleClick={(_) => handleClick("3")}>3</Button>

                <Button handleClick={(_) => handleClick("+")}>&#43;</Button>

                <Button handleClick={(_) => handleClick("0")} isZero={true}>
                    0
        </Button>
                <Button handleClick={(_) => handleClick(".")}>.</Button>

                <Button handleClick={handleEqual}>&#61;</Button>
            </div>
        </div>
    );
};

export default Buttons;
