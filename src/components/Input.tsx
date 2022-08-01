import React, {ChangeEvent} from 'react';

type InputPropsType = {
    value: string,
    setInputValue: (value: string) => void,
}

const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setInputValue(event.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler} value={props.value}/>
        </div>
    );
};

export default Input;