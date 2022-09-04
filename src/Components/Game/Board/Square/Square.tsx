import React, {MouseEventHandler} from 'react';
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
        debugger
        dispatch(changeValueAC(props.id))
    }
    return (
        <div className={s.square} onClick={onClickHandler}>
           <div  className={s.text}>{props.value}</div>
        </div>
    );
};

