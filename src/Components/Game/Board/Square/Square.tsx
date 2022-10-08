import React from 'react';
import s from './Square.module.css'


export type SquarePropsType = {
    value: any
    onClickHandler:()=>void
    index:number
    hwoIsWin:any
}

export const Square = (props: SquarePropsType) => {

  const winnerLine = props.hwoIsWin && props.index === props.hwoIsWin[1][0] || props.index === props.hwoIsWin[1][1] || props.index === props.hwoIsWin[1][2]
    return (
        <button className={winnerLine ? s.winLine : s.square} onClick={props.onClickHandler}>{props.value}</button>
    );
};

