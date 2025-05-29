import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SimpleCarousel from "./components/Carousel";
import CategoryBar from "./components/CategoryBar";


export default function App() {

  return (
    <>
      <NavBar />
      <SimpleCarousel />
      <CategoryBar />

    </>
  );
}
