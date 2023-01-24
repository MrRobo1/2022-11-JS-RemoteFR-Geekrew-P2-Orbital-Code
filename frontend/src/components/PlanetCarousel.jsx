import React from "react";
import { Carousel } from "react-carousel3/dist/esm";
import BlackHole from "./BlackHole";
import Planet from "./Planet";

export default function PlanetCarousel() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel
        height={1000}
        width={2500}
        yOrigin={200}
        yRadius={150}
        autoPlay={false}
      >
        <div key={1}>
          <Planet />
        </div>
        <div key={2}>
          <Planet />
        </div>
        <div key={3}>
          <button type="button" value="Mars"></button>
          <Planet />
          Planete
        </div>
        <div key={4}>
          <Planet />
        </div>
        <div key={5}>
          <BlackHole />
        </div>
        <div key={6}>
          <Planet />
        </div>
        <div key={7}>
          <Planet />
        </div>
        <div key={8}>
          <Planet />
        </div>
      </Carousel>
    </div>
  );
}
