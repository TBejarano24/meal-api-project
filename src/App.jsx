import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Receta from "./pages/receta/Receta";

export default function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receta" element={<Receta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
