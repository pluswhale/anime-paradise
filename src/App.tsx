import React from 'react';
import './App.css';
import styled from "styled-components";
import {HomePage} from "./app/containers/HomePage";

function App() {

    const AppContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    `
  return (
    <AppContainer className="App">
        <HomePage/>
    </AppContainer>
  );
}

export default App;
