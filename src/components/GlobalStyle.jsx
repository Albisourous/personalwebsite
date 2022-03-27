import { createGlobalStyle } from "styled-components";

export const BrowserStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Valorant";
  overflow-x: hidden;

  overflow-y: hidden;

  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  cursor: none;
}

.aligncenter {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3em;
  filter: grayscale(100%);
  overflow: hidden;
}

.alignleft {
  padding-left: 2%;
  top: 36px;
  flex: 1;
  padding-top: 16px;
}

.alignright {
  padding-right: 2%;
  top: 36px;
  flex: 1;
  text-align: right;
  padding-top: 16px;
}

.cursor-dot {
  opacity: 1;
  position: fixed;
  top: 50%;
  left: -50%;
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: difference;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  background-color: white;
  box-shadow: 0.1em 0.1em 0 rgba(255, 0, 0, 1),
    -0.1em -0.1em 0 rgba(0, 255, 255, 1);
}

.slider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  overflow-y: none;
  height: 75vh;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  box-shadow: 0px 0px 0px 5px white;
  transition: border 0.6s linear;
  margin: 0.5em;
}

.image {
  height: auto;
  max-height: 50vh;
  max-width: 50vw;
  overflow-x: hidden;
  filter: grayscale(100%);
}

.image:hover {
  transition: all 4s ease;
  filter: saturate(50%);
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 100px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  mix-blend-mode: lighten;
}

.left-arrow {
  position: absolute;
  top: 50%;
  left: 100px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  mix-blend-mode: lighten;
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}

/* Based on http://css-workshop.com/hover-box-text-over-images-on-hover-and-more/ */
.imgbox,
.imgbox * {
  box-sizing: border-box;
}

.imgbox {
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.imgbox .imgbox-top {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 15px;
  transition: all .5s ease-in-out 0s;
}

.imgbox:hover .imgbox-top,
.imgbox.active .imgbox-top {
  opacity: 1;
  filter: difference(100%);
}

.imgbox .imgbox-text {
  text-align: center;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  transform: translate(-50%, -50%);
}

@font-face {
  font-family: "Valorant";
  src: local("Valorant"),
   url("./fonts/Valorant.ttf") format("truetype");
  font-weight: bold;
}


`;

export const MobileStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Valorant";
  overflow-x: hidden;

  overflow-y: hidden;

  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
  cursor: none;
}

.aligncenter {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 5vh;
  font-size: 1em;
  filter: grayscale(100%);
}

.alignleft {
  padding-left: 2%;
  top: 36px;
  flex: 1;
  padding-top: 16px;
}

.alignright {
  padding-right: 2%;
  top: 36px;
  flex: 1;
  text-align: right;
  padding-top: 16px;
}

.slider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  overflow-y: none;
  height: 75vh;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  box-shadow: 0px 0px 0px 5px white;
  transition: border 0.6s linear;
  margin: 0.5em;
}

.image {
  height: auto;
  max-height: 50vh;
  max-width: 80vw;
  overflow-x: hidden;
  filter: grayscale(100%);
}

.image:hover {
  transition: all 4s ease;
  filter: saturate(50%);
}

.right-arrow {
  position: absolute;
  top: 50%;
  right: 36px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  mix-blend-mode: lighten;
}

.left-arrow {
  position: absolute;
  top: 50%;
  left: 36px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  mix-blend-mode: lighten;
}

.slide {
  opacity: 0;
  transition-duration: 1s ease;
}

.slide.active {
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
}

/* Based on http://css-workshop.com/hover-box-text-over-images-on-hover-and-more/ */
.imgbox,
.imgbox * {
  box-sizing: border-box;
}

.imgbox {
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;
}

.imgbox .imgbox-top {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 15px;
  transition: all 0.4s ease-in-out 0s;
}

.imgbox .imgbox-text {
  text-align: center;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  background: transparent;
  transform: translate(-50%, -50%);
}

@font-face {
  font-family: "Valorant";
  src: local("Valorant"),
   url("./fonts/Valorant.ttf") format("truetype");
  font-weight: bold;
}

`;
