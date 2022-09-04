import React from 'react';
import {Board} from "./Board/Board";
import s from './Game.module.css'

export const Game = () => {
    return <div className={s.container}>
        <Board/>
    </div>
};

