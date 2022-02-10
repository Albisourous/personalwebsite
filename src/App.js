import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserStyle, MobileStyle } from './components/GlobalStyle'

import Menu from './components/Menu';
import Cursor from "./components/Cursor";
import Typewriter from "./components/Typewriter"
import Slider from "./components/Slider"

//import PlaySound from "./components/Sound"

import './components/App.css'
import { MyData } from "./components/MyData";


function App() {
    return (
        < div >
            <BrowserView>
                <BrowserStyle />
                <Menu />
                <Typewriter />
                <Slider slides={MyData} />
                <Cursor />
            </BrowserView>

            <MobileView>
                <MobileStyle />
                <Menu />
                <Typewriter />
                <Slider slides={MyData} />
            </MobileView>
        </div >
    );
}

export default App;
