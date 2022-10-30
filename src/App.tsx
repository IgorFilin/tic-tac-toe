import React from 'react';
import {Game} from "./Components/Game/Game";
import styled from 'styled-components'


const AppWrapper = styled.div
    `
    `

function App() {
    return (
        <AppWrapper>
            <Game/>
        </AppWrapper>
    );
}

export default App;
