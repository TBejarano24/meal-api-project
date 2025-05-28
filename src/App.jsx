import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import SimpleCarousel from "./components/Carousel";
import CategoryBar from "./components/CategoryBar";

export default function App() {
  const [isOpen, setIsopen] = useState(false);

  const toggleModal = () => {
    setIsopen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <NavBar onClose={toggleModal} isOpen={isOpen} />
      <SimpleCarousel />
      <CategoryBar />
    </>
  );
}
