import React, {useMemo, useState} from 'react';
import {CustomSelect, ItemType} from "../components/CustomSelect";


export default {
    title: 'CustomSelect',
    component: CustomSelect
}

export function CustomSelectBase() {
    const [value, setValue] = useState<any>(2)
    const initialState = [
        {value: 1, title: 'food'},
        {value: 2, title: 'water'},
        {value: 3, title: 'sport'},
        {value: 4, title: 'play'},
        {value: 5, title: 'work'},
    ]

    return <CustomSelect value={value}
                         setValue={setValue}
                         items={initialState}
    />
}

const CustomSelectMemo = React.memo(CustomSelect)

export function CustomSelectBelarusianCity() {
    console.log('Select Memo')
    const [counter, setCounter] = useState<number>(0)
    const [value, setValue] = useState<any>(2)
    const [state, setState] = useState<ItemType[]>([
        {value: 1, title: 'Minsk', country: 'Belarus'},
        {value: 2, title: 'Vitebsk', country: 'Belarus'},
        {value: 3, title: 'Brest', country: 'Belarus'},
        {value: 4, title: 'Kiev', country: 'Ukraine'},
        {value: 5, title: 'Krivoy Rog', country: 'Ukraine'},
        {value: 5, title: 'Moskov', country: 'Russia'},
        {value: 5, title: 'Spb', country: 'Russia'},
    ])

    const selectCities = useMemo(() => {
        return state.filter(item => item.country === 'Belarus')
    }, [state])

    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <CustomSelectMemo value={value}
                          setValue={setValue}
                          items={selectCities}
        />
    </>
}

export function CustomSelectUkraineCity() {
    console.log('Select Memo')
    const [counter, setCounter] = useState<number>(0)
    const [value, setValue] = useState<any>(1)
    const [state, setState] = useState<ItemType[]>([
        {value: 1, title: 'Minsk', country: 'Belarus'},
        {value: 2, title: 'Vitebsk', country: 'Belarus'},
        {value: 3, title: 'Brest', country: 'Belarus'},
        {value: 4, title: 'Kiev', country: 'Ukraine'},
        {value: 5, title: 'Krivoy Rog', country: 'Ukraine'},
        {value: 5, title: 'Moskov', country: 'Russia'},
        {value: 5, title: 'Spb', country: 'Russia'},
    ])


    const selectCities = useMemo(() => {
        const filteredSate = state.filter(item => item.country === 'Ukraine')
        setValue(filteredSate[0].value)
        return filteredSate
    }, [state])

    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <CustomSelectMemo value={value}
                          setValue={setValue}
                          items={selectCities}
        />
    </>
}

export function CustomSelectRussiaCity() {
    console.log('Select Memo')
    const [counter, setCounter] = useState<number>(0)
    const [value, setValue] = useState<any>(1)
    const [state, setState] = useState<ItemType[]>([
        {value: 1, title: 'Minsk', country: 'Belarus'},
        {value: 2, title: 'Vitebsk', country: 'Belarus'},
        {value: 3, title: 'Brest', country: 'Belarus'},
        {value: 4, title: 'Kiev', country: 'Ukraine'},
        {value: 5, title: 'Krivoy Rog', country: 'Ukraine'},
        {value: 6, title: 'Moskov', country: 'Russia'},
        {value: 7, title: 'Spb', country: 'Russia'},
    ])


    const selectCities = useMemo(() => {
        const filteredSate = state.filter(item => item.country === 'Russia')
        setValue(filteredSate[0].value)
        return filteredSate
    }, [state])

    return <>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <CustomSelectMemo value={value}
                          setValue={setValue}
                          items={selectCities}
        />
    </>
}

