import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import * as Mui from "@material-ui/core";

function App() {
    return (
        <div>
            <Navbar />
            <div id="landingpage">
                <Mui.Typography variant="h2">IPC Simplified</Mui.Typography>
                <Mui.Divider />
                <Mui.Typography variant="subtitle1">
                    A website to make laws easier.
                </Mui.Typography>
            </div>
            <div id="centernav">
                <Mui.Typography variant="body1">
                    Please navigate to one of these links for content.
                </Mui.Typography>
                <br />
                <Mui.ButtonGroup color="primary">
                    <Mui.Button>Home</Mui.Button>
                    <Mui.Button>Forums</Mui.Button>
                    <Mui.Button>About</Mui.Button>
                    <Mui.Button>Lawyers</Mui.Button>
                </Mui.ButtonGroup>
                <div id="buttons"></div>
            </div>
        </div>
    );
}

export default App;
