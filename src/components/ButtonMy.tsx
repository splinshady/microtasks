import React from 'react';
import style from './Style.module.css';
import Button from '@mui/material/Button';

type ButtonPropsType = {
    name: string,
    callback: () => void
}

const ButtonMy = (props: ButtonPropsType) => {

    const clickHandler = () => {
        props.callback();
    }

    return (
        <div>
            <Button color={'secondary'} variant="contained" onClick={clickHandler}>{props.name}</Button>
        </div>
    );
};

export default ButtonMy;