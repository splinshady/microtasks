import React from 'react';
import Button from "./ButtonMy";
import {FilterType} from "./Money";

type CurrentMoneyType = {
    banknots: string,
    value: number,
    number: string
}

type MoneyContentPropsType = {
    title: string,
    currentMoney: Array<CurrentMoneyType>,
    callback: (filter: FilterType) => void
}

const MoneyContent = (props: MoneyContentPropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{`banknots: ${item.banknots}, value: ${item.value}, number: ${item.number}`}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'all'} callback={() => props.callback('all')}/>
                <Button name={'dollar'} callback={() => props.callback('Dollars')}/>
                <Button name={'ruble'} callback={() => props.callback('RUBLS')}/>
            </div>
        </div>
    );
};

export default MoneyContent;