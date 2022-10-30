import React from 'react';
import styled from "styled-components";


const SquareButton = styled.button<{ winnerLine: boolean }>`
  width: 100px;
  height: 100px;
  border: 1px solid #222222;
  cursor: pointer;
  outline: none;
  font-size: 60px;
  box-sizing: border-box;
  font-family: Arial;
  transition: 0.3s;
  background-color: ${props => props.winnerLine ? 'red' : 'white'};
`


export type SquarePropsType = {
    value: number
    onClickHandler: () => void
    index: number
    hwoIsWin: Array<any>
}

export const Square = (props: SquarePropsType) => {
    const winnerLine = props.hwoIsWin && props.index === props.hwoIsWin[1][0] || props.index === props.hwoIsWin[1][1] || props.index === props.hwoIsWin[1][2]
    return (
        <SquareButton winnerLine={winnerLine} onClick={props.onClickHandler}>{props.value}</SquareButton>
    );
}
