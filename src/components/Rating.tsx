import React, {useState} from 'react';
import style from './Style.module.css';
import Star from "./Star";

const Rating = () => {
    const [selected, setSelected] = useState<number>(0)
    return (
        <div>
            <h1>Rating</h1>
            <div className={style.star_container}>
                <Star selected={selected >= 1} setSelected={() => {
                    setSelected(1)
                }}/>
                <Star selected={selected >= 2} setSelected={() => {
                    setSelected(2)
                }}/>
                <Star selected={selected >= 3} setSelected={() => {
                    setSelected(3)
                }}/>
                <Star selected={selected >= 4} setSelected={() => {
                    setSelected(4)
                }}/>
                <Star selected={selected >= 5} setSelected={() => {
                    setSelected(5)
                }}/>
            </div>
        </div>
    );
};

export default Rating;