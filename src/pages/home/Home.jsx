import SimpleCarousel from "../../components/Carousel";
import CategoryBar from "../../components/CategoryBar";
import Card_Container from "../../components/Card_Container";

export default function Home() {
  return (
    <>
      <SimpleCarousel />
      <CategoryBar />
      {/* "filter" es el prop que se va a usar para pasar los filtros a las cards */}
      <Card_Container filter={"French"} />
    </>
  );
}
