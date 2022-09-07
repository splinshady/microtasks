import React from 'react';

export type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    changeCollapsed: () => void,
    items: ItemType[],
    itemOnClick: (value: any) => void
}

export type ItemType = {
    title: string,
    value: any
}

export type AccordionBodyPropsType = {
    items: ItemType[],
    itemOnClick: (value: any) => void
}

export type AccordionTitlePropsType = {
    titleValue: string
    changeCollapsed: () => void,
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}
                            changeCollapsed={props.changeCollapsed}
            />
            {!props.collapsed && <AccordionBody itemOnClick={props.itemOnClick} items={props.items}/>}
        </div>
    );
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={props.changeCollapsed}>{props.titleValue}</h1>
    );
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(item => {
                return <li onClick={() => props.itemOnClick(item.value)} key={item.value}>
                    {item.title}
                </li>
            })}
        </ul>
    );
};