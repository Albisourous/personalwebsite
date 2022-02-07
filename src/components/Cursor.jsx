import React from "react";
import { useEffect, useRef } from "react";

function toPX(vw) {
  return (vw * window.innerWidth) / 100;
}

const Cursor = () => {
  const dot = useRef(null);
  const cursorVisable = useRef(false);

  const endx = useRef(0);
  const endy = useRef(0);

  const cursorOnScreen = () => {
    cursorVisable.current
      ? (dot.current.style.opacity = 1)
      : (dot.current.style.opacity = 0);
  };

  const mouseOnSreen = () => {
    cursorVisable.current = true;
    cursorOnScreen();
  };

  const mouseOffScreen = () => {
    cursorVisable.current = false;
    cursorOnScreen();
  };

  const mouseMove = (e) => {
    cursorVisable.current = true;
    cursorOnScreen();

    endx.current = e.clientX;
    endy.current = e.clientY;

    dot.current.style.setProperty("top", endy.current - toPX(1) + "px");
    dot.current.style.setProperty("left", endx.current - toPX(1) + "px");
  };
  useEffect(() => {
    document.addEventListener("mouseenter", mouseOnSreen);
    document.addEventListener("mouseleave", mouseOffScreen);
    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.addEventListener("mouseenter", mouseOnSreen);
      document.addEventListener("mouseleave", mouseOffScreen);
      document.addEventListener("mousemove", mouseMove);
    };
  });
  return (
    <>
      <div ref={dot} className="cursor-dot"></div>
    </>
  );
};

export default Cursor;
