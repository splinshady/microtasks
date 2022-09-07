import React, {useState} from 'react';
import MoneyCurrent from '../components/MoneyContent';
import {FilterType} from "../components/Money";
import {moneyDataType} from "../App";

export default {
    title: 'MoneyCurrent',
    component: MoneyCurrent
}


export const MoneyCurrentBase = () => {
    const [filter, setFilter] = useState<FilterType>('all');
    const [money, setMoney] = useState<Array<moneyDataType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    return <MoneyCurrent title={'money'}
                  currentMoney={money}
                  callback={(filter)=>{setFilter(filter)}}/>
}