import React, {useState} from 'react';
import MoneyContent from "./MoneyContent";
import {moneyDataType} from "../App";

type MoneyPropsType = {
    title: string,
    data: Array<moneyDataType>
}

export type FilterType = 'all' | 'Dollars' | 'RUBLS';

const Money = (props: MoneyPropsType) => {

    let currentMoney = props.data;

    const [filter, setFilter] = useState<FilterType>('all');

    if (filter === 'all') {
        currentMoney = props.data;
    }

    if (filter === 'Dollars') {
        currentMoney = props.data.filter((item) => {
            return item.banknots === filter;
        });
    }
    if (filter === 'RUBLS') {
        currentMoney = props.data.filter((item) => {
            return item.banknots === filter;
        });
    }

    return (
        <MoneyContent title={props.title} currentMoney={currentMoney} callback={setFilter}/>
    );
};

export default Money;