import React from 'react';
import style from './Style.module.css';

type ButtonPropsType = {
    name: string,
    callback: () => void
}

const Button = (props: ButtonPropsType) => {

    const clickHandler = () => {
        props.callback();
    }

    return (
        <div>
            <button className={style.button} onClick={clickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;