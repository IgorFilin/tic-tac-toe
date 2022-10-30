import React, {useEffect, useState} from 'react';
import {Square} from "./Square/Square";
import styled from 'styled-components'

const ContainerSquare = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  background-color: red;
`
const ButtonClearBoard = styled.button<{ hwoIsWin: Array<any> | null, draw: boolean }>`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 17px;
  border: 1px solid darkblue;
  background-color: ${props => props.hwoIsWin || props.draw ? 'red' : '#f0f0f0'};
  color: ${props => props.hwoIsWin || props.draw ? 'white' : 'black'};
  transition: 0.8s;

  &:hover {
    background-color: antiquewhite;
    transition: 0.8s;
  }
`
const H2 = styled.h2`
  color: #1ad3c3;
  margin: 10px;
`
const TableResult = styled.table`
  padding: 5px;
  color: #1ad3c3;
  font-size: 20px;
`
const Tr = styled.tr`
  text-align: center;
`
const Td = styled.td`
  text-align: center;
  border: 1px solid #1ad3c3;
  padding: 5px;
  color: red;
  font-size: 25px;
`

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
            return [array[a], [a, b, c]]
        }

    }
    return null
}

export const Board = () => {
    const [squareArray, setSquareArray] = useState(Array(9).fill(null, 0, 9)) // массив значений X и O
    const [isMoveX, setIsMoveX] = useState(true) // кто ходит
    const [scoreX, setScoreX] = useState(0)
    const [scoreO, setScoreO] = useState(0)


    const hwoIsWin = winner(squareArray) // определяем победителя

    const draw = squareArray.every((el) => el !== null) && !hwoIsWin // условие ничьи
    const useEffectDept = hwoIsWin && squareArray.length === 9

    useEffect(() => {
        if (hwoIsWin) {
            if (hwoIsWin[0] === 'X') {
                setScoreX(scoreX + 1)
            } else {
                setScoreO(scoreO + 1)
            }
        }
    }, [useEffectDept])

    const onClickHandler = (index: number) => {
        let copySquareArray = [...squareArray]
        if (copySquareArray[index] || hwoIsWin) {
            return null
        }

        if (isMoveX) {
            copySquareArray[index] = 'X'
            setIsMoveX(false)
            setSquareArray(copySquareArray)
        } else {
            copySquareArray[index] = 'O'
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
            <H2>Ничья</H2>
            :
            hwoIsWin ?
                <H2>Победитель : {hwoIsWin[0]}</H2>
                :
                <H2>Следующий ход : {isMoveX ? 'X' : 'O'}</H2>

    }

    return (
        <>
            <ButtonClearBoard
                draw={draw}
                hwoIsWin={hwoIsWin}
                onClick={onClickHandlerClearBoard}>
                Очистить поле
            </ButtonClearBoard>

            <ContainerSquare>
                {squareArray.map((el, i) =>
                    <Square
                        hwoIsWin={hwoIsWin ? hwoIsWin : ['', []]} index={i} key={i}
                        value={el}
                        onClickHandler={() => onClickHandler(i)}/>)}
            </ContainerSquare>
            {result()}
            <TableResult>
                <caption>Количество побед игроков</caption>
                <Tr>
                    <Td>Очки игрока X</Td>
                    <Td>Очки игрока O</Td>
                </Tr>
                <Tr>
                    <Td>{scoreX}</Td>
                    <Td>{scoreO}</Td>
                </Tr>
            </TableResult>
        </>

    );
};

