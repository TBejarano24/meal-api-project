import SimpleCarousel from "../../components/Carousel";
import CategoryBar from "../../components/CategoryBar";
import Card_Container from "../../components/Card_Container";
import { useState } from "react";
import NavBar from "../../components/NavBar";

export default function Home() {

  const [filter, setFilter] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  return (
    <>
      <NavBar
        filter={filter}
        setFilter={setFilter} />
      <SimpleCarousel />
      <CategoryBar />
      {/* "filter" es el prop que se va a usar para pasar los filtros a las cards */}
      {/* La url que está acá ahora mismo sólo está de ejemplo para mostrar que funciona */}
      <Card_Container
        filter={filter}
        setFilter={setFilter}
      />
    </>
  );
}
