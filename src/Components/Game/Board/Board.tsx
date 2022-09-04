import React from 'react';
import {Square} from "./Square/Square";
import s from './Board.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../store/store";
import {initialStateType} from "../../../reducers/reducer";

export const Board = () => {
    const table = useSelector<AppStoreType,initialStateType>(state => state.table)

    return (
        <div className={s.containerSquare}>
            {table.map(t => {
                return (
                    <Square key={t.id} value={t.value} id={t.id}/>
                )
            })}


        </div>


    );
};

