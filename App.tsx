import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import {Navigate, Route, Routes} from "react-router-dom";
import {Welcome} from "./containers";



function App() {
  return (
    <div className="App">
        <header className="App-header">

        </header>
        <Container className={"my-4"}>
            <Routes>
                <Route path={"/"} element={<Welcome />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
        <footer className={"App-footer"}>

        </footer>
    </div>
  );
}

export default App;
