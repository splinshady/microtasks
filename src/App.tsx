import React, {useState} from 'react';
import './App.css';
import {Car} from "./components/Car";
import Money from "./components/Money";

export type carsDataType = {
    manufacturer: string,
    model: string,
}

export type moneyDataType = {
    banknots: string,
    number: string,
    value: number,
}

function App() {
    const [cars, setCars] = useState<Array<carsDataType>>([
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ])

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

    return (
        <div className="App">
            <Car title={'cars'} data={cars}/>
            <Money title={'Money'} data={money}/>
        </div>
    );
}

export default App;
