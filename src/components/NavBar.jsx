import Navegador from "./Navegador";
import { useState } from "react";
import TraerDatos from "./TraerDatos";
import { Link } from 'react-router';

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  const [url, setUrl] = useState(null)
  const chicken = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`
  const beef = `https://www.themealdb.com/api/json/v1/1/filter.php?i=beef`
  const salmon = `https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon`
  const cheese = `https://www.themealdb.com/api/json/v1/1/filter.php?i=cheese`
  const eggs = `https://www.themealdb.com/api/json/v1/1/filter.php?i=eggs`
  const pork = `https://www.themealdb.com/api/json/v1/1/filter.php?i=pork`

  const toggleModal = () => {
    setIsopen((prev) => {
      return !prev;
    })
  }

  function handleClose(e) {
    if (e.target.id === "modal") {
      toggleModal();
    }
  }

  function filtroBoton(url) {
    setUrl(url);
    toggleModal()
  }


  return (
    <>

      <div
        id="header"
        className="text-white w-screen fixed top-0 left-0 right-0 h-[100px] sm:h-[60px] z-[400] bg-[#8fc636] shadow-lg flex max-sm:flex-col ">
        <div className='flex w-[100%] h-[100%] items-center  justify-around'>
          <button className="w-[10%] flex items-center justify-end h-[100%]  flex-col">

            <Link to="/"><img src="/home.png" alt="home" className='w-[25px]' />Inicio</Link>
          </button>

          <div
            id="icon"
            className=" h-[100%] w-[150px] sm:w-[180px] mt-2 sm:mt-0 flex items-center ">
            <img
              src="https://masideas.com/files/2015/10/kl-logo-l-300x76.jpg"
              alt="logo"
            />
          </div>
          <div className="w-[10%]">

          </div>
        </div>
        <div className='w-[100%] flex items-center justify-around'>
          <Navegador />
          <div
            onClick={toggleModal}
            className=" w-[50px] h-[100%]  cursor-pointer flex items-center">
            <img src="/barra-de-menus.png" alt="barra" />
          </div>
        </div>
      </div>

      <div
        onClick={handleClose}
        id="modal"
        className={`fixed inset-0 z-30 bg-gray-600/60 flex flex-col items-baseline modal-entero ${isOpen ? "flex" : "hidden"
          }`}>
        <div
          id="menu"
          className="bg-white h-[180px] mt-[90px] sm:mt-[60px] w-full border-10 border-[#8fc636] flex flex-col sm:items-center">
          <p className='text-red-700 font-bold pl-10 pt-2 w-[100%]'>Recetas:</p>
          <div className='flex sm:flex-col items-center justify-center w-[100%]'>
            <span className=" pt-2  w-[100%] ">
              <ul className="sm:flex sm:justify-around">
                <li>
                  <button onClick={() => filtroBoton(chicken)} className="text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con pollo
                  </button>
                </li>
                <li>
                  <button onClick={() => filtroBoton(beef)} className="text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con res
                  </button>
                </li>
                <li>
                  <button onClick={() => filtroBoton(salmon)} className="text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con salmón
                  </button>
                </li>
              </ul>
            </span>
            <span className=" pt-2  w-[100%]">
              <ul className="sm:flex sm:justify-around">
                <li>
                  <button onClick={() => filtroBoton(cheese)} className=" text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con queso
                  </button>
                </li>
                <li>
                  <button onClick={() => filtroBoton(eggs)} className=" text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con huevos
                  </button>
                </li>
                <li>
                  <button onClick={() => filtroBoton(pork)} className=" text-[12px] sm:text-[20px] font-bold px-5 py-1 mt-2 bg-lime-100 rounded-md">
                    <a href=""></a>Recetas con cerdo
                  </button>
                </li>
              </ul>
            </span>
          </div>


        </div>
      </div>
      {url && <TraerDatos url={url} />}
    </>
  );
}
//cambios
// import React from "react";
// import NavBar from "./components/NavBar";
// import { useState } from 'react'

// export default function App() {
//   const [isOpen, setIsopen] = useState(false)

//   const toggleModal = () => {
//     setIsopen((prev) => {
//       return !prev
//     })
//   }
//   return (
//     <>
//       <NavBar
//         onClose={toggleModal}
//         isOpen={isOpen} />

//     </>)
// }
