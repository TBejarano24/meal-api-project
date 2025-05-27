import React from "react";
import Navegador from "./Navegador";

export default function NavBar({ onClose, isOpen }) {
  function handleClose(e) {
    if (e.target.id === "modal") {
      onClose();
    }
  }

  return (
    <>
      <div
        onClick={handleClose}
        id="modal"
        className={`fixed inset-0 bg-gray-600/60 flex flex-col items-baseline modal-entero ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <div
          id="menu"
          className="bg-white h-[200px] mt-[60px] w-full border-10 border-[#8fc636] flex gap-10"
        >
          <span>
            Recetas:
            <ul>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
            </ul>
          </span>
          <span>
            Recetas:
            <ul>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
            </ul>
          </span>
          <span>
            Recetas:
            <ul>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
              <li>
                <button className=" px-5 py-1 bg-lime-100 rounded-md">
                  <a href=""></a>Opcion 1
                </button>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div
        id="header"
        className="text-white w-screen fixed top-0 left-0 right-0 h-[60px] z-[400] bg-[#8fc636] shadow-lg flex justify-between items-center"
      >
        <div
          onClick={onClose}
          className=" w-[50px] h-[100%] ml-[5%] cursor-pointer flex items-center"
        >
          <img src="/barra-de-menus.png" alt="barra" />
        </div>
        <div
          id="icon"
          className=" h-[100%] w-[200px] pl-[20px] flex items-center "
        >
          <img
            src="https://masideas.com/files/2015/10/kl-logo-l-300x76.jpg"
            alt="logo"
          />
        </div>
        <div className=" h-[60px]  pt-2.5  w-[30%]">
          <div className="cursor-pointer p-2 text-white text-2xl float-right h-5.5 w-5.5 opacity-55">
            {/* Icono de búsqueda */}
          </div>

          <Navegador />
        </div>
      </div>
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
