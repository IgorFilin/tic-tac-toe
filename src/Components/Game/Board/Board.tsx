import React, {useState} from 'react';
import {Square} from "./Square/Square";
import s from './Board.module.css'


const winner = (array: Array<any>) => {

    const winnersCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winnersCombinations.length; i++) { // включается цикл по массиву winnersCombinations
        const arr = winnersCombinations // просто обьявление переменной
        const [a, b, c] = arr[i] // деструкторизируем элемент массива под название переменных
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            // используем в условии название переменных как индексы к входящему массиву
            return [array[a],[a,b,c]]
        }

    }
    return null
}

export const Board = () => {
    const [squareArray, setSquareArray] = useState(Array(9).fill(null, 0, 9)) // массив значений X и O
    const [isMoveX, setIsMoveX] = useState(true) // кто ходит



    const hwoIsWin = winner(squareArray) // определяем победителя

    const draw = squareArray.every((el) => el !== null) && !hwoIsWin // условие ничьи


    const onClickHandler = (index: number) => {
        let copySquareArray = [...squareArray]
        if (copySquareArray[index] || hwoIsWin) {
            return null
        }
        if (isMoveX) {
            copySquareArray[index] = 'x'
            setIsMoveX(false)
            setSquareArray(copySquareArray)
        } else {
            copySquareArray[index] = 'o'
            setIsMoveX(true)
            setSquareArray(copySquareArray)
        }

    }

    const onClickHandlerClearBoard = () => {
        setSquareArray(Array(9).fill(null, 0, 9))
        setIsMoveX(true)
    }
    const result = () => {
        return draw ?
            <h2 className={s.winnerPlayer}>Ничья</h2>
            :
            hwoIsWin ?
                <h2 className={s.winnerPlayer}>Победитель : {hwoIsWin[0]}</h2>
                :
                <h2 className={s.nextTry}>Следующий ход : {isMoveX ? 'X' : 'O'}</h2>

    }
    return (
        <>
            <button onClick={onClickHandlerClearBoard} className={s.buttonClearBoard}>Очистить поле</button>
            <div className={s.containerSquare}>
                {squareArray.map((el, i) => <Square hwoIsWin={hwoIsWin ? hwoIsWin : ['',[]]} index={i}  key={i} value={el} onClickHandler={() => onClickHandler(i)}/>)}
            </div>
            {result()}
        </>

    );
};

