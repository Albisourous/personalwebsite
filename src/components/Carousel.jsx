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
    { src: "https://source.unsplash.com/1600x900/?1," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?2," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?3," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?4," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?5," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?6," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?7," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?8," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?9," + searchTerm },
    { src: "https://source.unsplash.com/1600x900/?10," + searchTerm },
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
