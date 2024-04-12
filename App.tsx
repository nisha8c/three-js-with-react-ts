import React, {useEffect, useState} from 'react';
import './App.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Welcome, WeeklyMenu} from "./containers";
import {ClerkProvider, SignIn, SignUp} from "@clerk/clerk-react";
import WithSignInProtectionHOC from "./HOC/WithSignInProtectionHOC";
import {Footer, Header} from "./components";
import {IWeeklyMenuProps} from "./interfaces/interfaces";

const server_port = process.env.SERVER_PORT || 8000;
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const [ weekMenus, setWeekMenus ] = useState<IWeeklyMenuProps[]>();
    useEffect(() => {
        const getWeekMenus = async() => {
            const response = await fetch (`http://localhost:${server_port}/api/weekMenus`);
            const data = await response.json();
            setWeekMenus(data);
            console.log(weekMenus);
        };
        getWeekMenus();
    }, []);

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
