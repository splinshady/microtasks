import React from 'react';
import style from './Style.module.css';
import Button from "./Button";
import {carsDataType} from "../App";

type ListPropsType = {
    title: string,
    data: Array<carsDataType>
}

export const Car = (props: ListPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map((item, i) => {
                    return (
                        <tr key={i+item.manufacturer+item.model}>
                            <th>{i+1}</th>
                            <th>{item.manufacturer}</th>
                            <th>{item.model}</th>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div>
                <Button name={'All'} callback={() => {console.log()}}/>
                <Button name={'Active'} callback={() => {console.log('hi')}}/>
                <Button name={'Completed'} callback={() => {console.log('hi')}}/>
            </div>
        </div>
    );
};