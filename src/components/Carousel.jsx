import React from "react";
import Carousel from "react-images";

function classNames(classes) {
  return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(" ");
}
const classes = {
  aligncenter: true,
  carousel: true,
};

const myClassNames = classNames(classes);

function pics(searchTerm) {
  let images = [
    { src: "https://source.unsplash.com/1600x900/?0," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?1," + searchTerm },
  ];
  return (
    <Carousel
      hideControlsWhenIdle={false}
      preventScroll={true}
      views={images}
    />
  );
}

const SearchPhotos = () => {
  return <div className={myClassNames}>{pics("airplane")}</div>;
};

export default SearchPhotos;
