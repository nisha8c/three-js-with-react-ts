import React from 'react';
import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Welcome, WeeklyMenu} from "./containers";
import {ClerkProvider, SignIn, SignUp} from "@clerk/clerk-react";
import WithSignInProtectionHOC from "./HOC/WithSignInProtectionHOC";
import {Footer, Header} from "./components";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
      <>
          <ClerkProviderWithRoutes />
          <Footer />
      </>
  );
}

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();
    return(
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={to => navigate(to)}
        >
            <Header />
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
                <Route
                    path="/weekly-menu"
                    element={
                    <WithSignInProtectionHOC>
                        <WeeklyMenu title={"Weekly Menu"} items={[]}/>
                    </WithSignInProtectionHOC>}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ClerkProvider>
    );
}

export default App;
