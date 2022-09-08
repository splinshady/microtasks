import React, {KeyboardEvent, useEffect, useState} from 'react';
import style from './styles/CustomSelect.module.css';

export type ItemType = {
    title: string,
    value: any,
    country?: string,
}

export type CustomSelectPropsType = {
    value: any,
    setValue: (value: string) => void,
    items: ItemType[]
}

export function CustomSelect(props: CustomSelectPropsType) {
    console.log('Select')

    const [showOptionList, setShowOptionList] = useState(false)
    const [itemHover, setItemHover] = useState(props.value)

    useEffect(() => {
        setItemHover(props.value)
    }, [props.value])

    const selectedItem = props.items.find(item => item.value === props.value)
    const selectItemHandler = (value: any) => {
        props.setValue(value)
        setShowOptionList(false)
    }
    const titleClickHandler = () => {
        setShowOptionList(!showOptionList)
        setItemHover(props.value)
    }
    const keyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === itemHover) {
                    props.items[i + 1] && props.setValue(props.items[i + 1].value)
                    break;
                }
            }
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === itemHover) {
                    props.items[i - 1] && props.setValue(props.items[i - 1].value)
                    break;
                }
            }
        }
        if (event.key === 'Enter' || event.key === 'Escape') {
            setShowOptionList(false)
        }
    }
    const hoveredItem = props.items.find(item => item.value === itemHover)

    const listShowStyle = showOptionList ? style.showList : ''

    return (
        <div className={style.select_container}
             tabIndex={0}
             onBlur={() => {
                 setShowOptionList(false)
             }}
             onKeyUp={keyUpHandler}
        >
            <h3 className={style.selected_value}
                onClick={titleClickHandler}
            >{selectedItem && selectedItem.title}</h3>

            <div className={`${style.items_container} ${listShowStyle}`}>
                {props.items.map(item => {
                    return <span
                        className={`${style.item} ${hoveredItem && hoveredItem.value === item.value ? style.item_hover : ''}`}
                        onMouseEnter={() => {
                            setItemHover(item.value)
                        }
                        }
                        key={item.value}
                        onClick={() => {
                            selectItemHandler(item.value)
                        }}
                    >{item.title}</span>
                })
                }
            </div>
        </div>
    );
};
