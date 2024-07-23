import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="/images/web.jpg"
    alt="Image 1"
    className="item w-full h-auto object-contain"
    data-value="1"
  />,
  <img
    src="/images/two.jpg"
    alt="Image 2"
    className="item w-full h-auto object-contain"
    data-value="2"
  />,
  <img
    src="/images/three.svg"
    alt="Image 3"
    className="item w-full h-auto object-contain"
    data-value="3"
  />,
];

const MainCarausel = () => (
  <div className="bg-black w-full">
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={1000}
      infinite
      disableButtonsControls
    />
  </div>
);

export default MainCarausel;
