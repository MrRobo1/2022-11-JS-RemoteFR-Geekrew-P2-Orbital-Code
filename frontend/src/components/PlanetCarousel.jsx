import React from "react";
import { Carousel } from "react-carousel3/dist/esm";
import BlackHole from "./BlackHole";
import Planet from "./Planet";

const style = {
  width: 250,
  height: 400,
};

export default function PlanetCarousel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        height={600}
        width={2500}
        yOrigin={102}
        yRadius={125}
        autoPlay={false}
      >
        <div key={1} style={style}>
          <BlackHole />
        </div>
        <div key={2} style={style}>
          <Planet />
        </div>
        <div key={3} style={style}>
          <Planet />
        </div>
        <div key={4} style={style}>
          <Planet />
        </div>
        <div key={5} style={style}>
          <Planet />
        </div>
        <div key={6} style={style}>
          <Planet />
        </div>
        <div key={7} style={style}>
          <Planet />
        </div>
        <div key={8} style={style}>
          <Planet />
        </div>
      </Carousel>
    </div>
  );
}
