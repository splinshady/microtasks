import React, {useState} from 'react';
import Star from '../components/Star';

export default {
    title: 'Star',
    component: Star
}

export const SelectedStar = () => <Star selected={true} setSelected={()=>{}}/>
export const UnSelectedStar = () => <Star selected={false} setSelected={()=>{}}/>
export const ChangeSelectedStar = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Star selected={value} setSelected={() => {setValue(!value)}}/>
}