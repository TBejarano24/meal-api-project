import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import { Routes, Route, Link } from "react-router";
import Receta from "./pages/receta/Receta";
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  return (
    <>
      <NavBar
        filter={filter}
        setFilter={setFilter} />
     
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receta/:nombre?" element={<Receta />} />
        </Routes>
    </>
  );
}
