import React from 'react';
//import style from './Style.module.css';

type ButtonPropsType = {
    name: string,
    callback: () => void
}

const Button = (props: ButtonPropsType) => {

    const clickHandler = () => {
        props.callback();
    }

    return (
        <button onClick={clickHandler}>{props.name}</button>
    );
};

export default Button;