import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <header className="App-header">

        </header>
        <Container className={"my-4"}>
            <Routes>
                <Route />
            </Routes>
        </Container>
        <footer className={"App-footer"}>

        </footer>
    </div>
  );
}

export default App;
