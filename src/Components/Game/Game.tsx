import React from 'react';
import {Board} from "./Board/Board";
import styled from 'styled-components'


const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222222
`

export const Game = () => {
    return <Container>
        <Board/>
    </Container>
};

