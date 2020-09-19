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
                <Button id="clear" handleClick={(_) => setInput("0")}>C</Button>
                <Button id="backspace" handleClick={(_) => setInput(popInput(input))}>&#8592;</Button>
                <Button id="plusminus" handleClick={(_) => setInput(toggleMinus(input))}>
                    &#177;
        </Button>

                <Button id="divide" handleClick={(_) => handleClick("/")}>&#247;</Button>
                <Button id="seven" handleClick={(_) => handleClick("7")}>7</Button>
                <Button id="eight" handleClick={(_) => handleClick("8")}>8</Button>
                <Button id="nine" handleClick={(_) => handleClick("9")}>9</Button>

                <Button id="multiply" handleClick={(_) => handleClick("*")}>&#215;</Button>

                <Button id="four" handleClick={(_) => handleClick("4")}>4</Button>
                <Button id="five" handleClick={(_) => handleClick("5")}>5</Button>
                <Button id="six" handleClick={(_) => handleClick("6")}>6</Button>

                <Button id="subtract" handleClick={(_) => handleClick("-")}>&#8722;</Button>

                <Button id="one" handleClick={(_) => handleClick("1")}>1</Button>
                <Button id="two" handleClick={(_) => handleClick("2")}>2</Button>
                <Button id="three" handleClick={(_) => handleClick("3")}>3</Button>

                <Button id="add" handleClick={(_) => handleClick("+")}>&#43;</Button>

                <Button id="zero" handleClick={(_) => handleClick("0")} isZero={true}>
                    0
        </Button>
                <Button id="decimal" handleClick={(_) => handleClick(".")}>.</Button>

                <Button id="equals" handleClick={handleEqual}>&#61;</Button>
            </div>
        </div>
    );
};

export default Buttons;
