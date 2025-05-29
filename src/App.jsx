import Card_Container from "./components/Card_Container";
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
      {/* "filter" es el prop que se va a usar para pasar los filtros a las cards */}
      <Card_Container filter={"French"} />

    </>
  );
}
