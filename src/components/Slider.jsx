// Code based on https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign

import React, { useState } from "react";
import { ProjectsData } from "./ProjectsData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  function changeBackground(e) {
    e.target.style.background = "red";
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {ProjectsData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            <div class="imgbox">
              {index === current && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="image"
                  onClick={() => window.open(slide.link)}
                  onMouseOver={changeBackground}
                ></img>
              )}
              <div class="imgbox-layer_top">
                <div class="imgbox-text">{slide.title}</div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
