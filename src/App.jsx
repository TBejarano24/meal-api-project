import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import { Routes, Route, Link } from "react-router";
import Receta from "./pages/receta/Receta";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receta" element={<Receta />} />
      </Routes>
    </>
  );
}
