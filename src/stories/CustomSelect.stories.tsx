import React, {useState} from 'react';
import {CustomSelect} from "../components/CustomSelect";

export default {
    title: 'CustomSelect',
    component: CustomSelect
}

export function CustomSelectBase () {
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