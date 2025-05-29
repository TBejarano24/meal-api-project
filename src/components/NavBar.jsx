import React from "react";
import Navegador from "./Navegador";
import { useState } from "react";
import TraerDatos from "./TraerDatos";

export default function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  const [ing, setIng] = useState(null)

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

  function filtroBoton(ingrediente) {
    setIng(ingrediente);
    toggleModal()
  }


  return (
    <>

      <div
        id="header"
        className="text-white w-screen fixed top-0 left-0 right-0 h-[100px] sm:h-[60px] z-[400] bg-[#8fc636] shadow-lg flex max-sm:flex-col ">
        <div className='flex w-[100%] items-center justify-around '>

          <div
            id="icon"
            className=" h-[100%] w-[150px] sm:w-[180px] mt-2 sm:mt-0 flex items-center ">
            <img
              src="https://masideas.com/files/2015/10/kl-logo-l-300x76.jpg"
              alt="logo"
            />
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
        className={`fixed inset-0 z-10 bg-gray-600/60 flex flex-col items-baseline modal-entero ${isOpen ? "flex" : "hidden"
          }`}>
        <div
          id="menu"
          className="bg-white h-[200px] mt-[90px] w-full border-10 border-[#8fc636] flex gap-10">
          <span className="pt-5">
            Recetas:
            <ul>
              <li>
                <button onClick={() => filtroBoton("chicken")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con pollo
                </button>
              </li>
              <li>
                <button onClick={() => filtroBoton("beef")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con res
                </button>
              </li>
              <li>
                <button onClick={() => filtroBoton("salmon")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con salmón
                </button>
              </li>
            </ul>
          </span>
          <span className="pt-10">
            <ul>
              <li>
                <button onClick={() => filtroBoton("cheese")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con queso
                </button>
              </li>
              <li>
                <button onClick={() => filtroBoton("eggs")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con huevos
                </button>
              </li>
              <li>
                <button onClick={() => filtroBoton("pork")} className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Recetas con cerdo
                </button>
              </li>
            </ul>
          </span>

        </div>
      </div>
      {ing && <TraerDatos ingrediente={ing} />}
    </>
  );
}

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
