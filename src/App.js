import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserStyle, MobileStyle } from './components/GlobalStyle'

import Menu from './components/Menu';
import Cursor from "./components/Cursor";
import Typewriter from "./components/Typewriter"
import SearchPhotos from "./components/Carousel"

//import PlaySound from "./components/Sound"

import './components/App.css'


function App() {
    return (
        < div >
            <BrowserView>
                <BrowserStyle />
                <Menu />
                <Typewriter />
                <SearchPhotos />
                <Cursor />
            </BrowserView>

            <MobileView>
                <MobileStyle />
                <Menu />
                <Typewriter />
                <SearchPhotos />
            </MobileView>
        </div >
    );
}

export default App;
