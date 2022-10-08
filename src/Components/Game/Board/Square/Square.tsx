import React from 'react';
import s from './Square.module.css'


export type SquarePropsType = {
    value: any
    onClickHandler:()=>void
}

export const Square = (props: SquarePropsType) => {

    return (
        <button className={s.square} onClick={props.onClickHandler}>{props.value}</button>
    );
};

