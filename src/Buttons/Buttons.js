import React from 'react';
import Button from '../Button/Button'
import './Buttons.scss';

const Buttons = () => (
    <div className="buttons-container">
        <div className="buttons-grid">
        <Button>C</Button>
        <Button>&#8592;</Button>
        <Button>&#177;</Button>

        <Button>&#247;</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>

        <Button>&#215;</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>

        <Button>&#8722;</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>

        <Button>&#43;</Button>

        <Button isZero={true}>0</Button>
        <Button>.</Button>

        <Button>&#61;</Button>

        </div>
    </div>
);

export default Buttons;