import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "../components/Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

export function AccordionBase () {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const changeCollapsedCallBack = () => {
        setCollapsed(!collapsed)
    }
    const itemOnClick = (value: any) => {
        alert(value)
    }
    return <Accordion titleValue={'menu'}
                      collapsed={collapsed}
                      changeCollapsed={changeCollapsedCallBack}
                      items={[{title: 'first', value: 2}, {title: 'sec', value: 3}]}
                      itemOnClick={itemOnClick}
    />
}