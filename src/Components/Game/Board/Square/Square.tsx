import React from 'react';
import s from './Square.module.css'
import {useDispatch} from "react-redux";
import {changeValueAC} from "../../../../reducers/reducer";

export type SquarePropsType = {
    value: string
    id:number
}

export const Square = (props: SquarePropsType) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(changeValueAC(props.id))
    }
    return (
        <button className={s.square} onClick={onClickHandler}>x</button>
    );
};

