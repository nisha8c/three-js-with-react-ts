import React from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Welcome, MenuPage} from "./containers";
import {ClerkProvider, SignIn, SignUp} from "@clerk/clerk-react";
import WithSignInProtectionHOC from "./HOC/WithSignInProtectionHOC";

if (!process.env.REACT_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <div className="App">
        <header className="App-header">

        </header>
        <Container className={"my-4"}>
            <ClerkProviderWithRoutes />
        </Container>
        <footer className={"App-footer"}>

        </footer>
    </div>
  );
}

const ClerkProviderWithRoutes = () => {
    const navigate = useNavigate();
    return(
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={to => navigate(to)}
        >
            <Routes>
                <Route path={"/"} element={<Welcome />} />
                <Route
                    path="/sign-in/*"
                    element={<SignIn routing="path" path="/sign-in" />}
                />
                <Route
                    path="/sign-up/*"
                    element={<SignUp routing="path" path="/sign-up" />}
                />
                <Route path="/menu" element={WithSignInProtectionHOC(MenuPage)} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ClerkProvider>
    );
}

export default App;
