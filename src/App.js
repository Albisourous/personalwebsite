import React from "react";
import { BrowserView, MobileView } from 'react-device-detect';
import { BrowserStyle, MobileStyle } from './components/GlobalStyle'

import Menu from './components/Menu';
import Cursor from "./components/Cursor";
import Typewriter from "./components/Typewriter"
//import SearchPhotos from "./components/Carousel"
import Slider from "./components/Slider"

//import PlaySound from "./components/Sound"

import './components/App.css'
import { ProjectsData } from "./components/ProjectsData";


function App() {
    return (
        < div >
            <BrowserView>
                <BrowserStyle />
                <Menu />
                <Typewriter />
                <Slider slides={ProjectsData} />
                <Cursor />
            </BrowserView>

            <MobileView>
                <MobileStyle />
                <Menu />
                <Typewriter />
                <Slider slides={ProjectsData} />
            </MobileView>
        </div >
    );
}

export default App;
