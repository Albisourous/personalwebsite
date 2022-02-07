import { createGlobalStyle } from "styled-components";

export const BrowserStyle = createGlobalStyle`


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
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Valorant";

  margin: auto;
  padding: 0;
  background-color: black;
  color: white;
}

.parent {
  height: 100vh;
  text-align: center;
  font-size: 2vh;
}

.child {
  line-height: 50vh;
  vertical-align: middle;
}

@font-face {
  font-family: "Valorant";
  src: local("Valorant"),
   url("./fonts/Valorant.ttf") format("truetype");
  font-weight: bold;
}

`;
