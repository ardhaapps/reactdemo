import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComponent from "./components/layout/NavComponent.js";
import FooterComponent from "./components/layout/FooterComponent.js";
import Routers from "./Router.js";

function App() {
    return (
        <Router>
            <NavbarComponent />
            <div className="container">
                <Routers />
                <div className="App"></div>
            </div>
            <FooterComponent />
        </Router>
    );
}

export default App;
