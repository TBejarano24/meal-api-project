import { Link } from 'react-router';
import useData from '../hooks/useData';
import Receta from '../pages/receta/Receta';
// Este es el componente que contiene el diseño estándar de las cards

/* Recibe el prop "data", el cual contiene un objeto con los datos de la receta correspondiente
(Sólo tiene la imagen, el nombre y la id, si quieren pueden sugerir cambios) */
export default function CardDesign({ data }) {
  // Esto está acá por si quieren ver los valores de "data"
  console.log("hola", data);


  

  return (
    // Contenedor principal con clases necesarias para el efecto hover
    <div className="relative group w-[90%] h-[280px]   justify-self-center rounded-[16px] overflow-hidden">

      {/* Aqui va la foto */}
      <section>
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="h-[200px] w-[320px] object-cover rounded-[16px]"
        />
      </section>

      {/* Aqui va el texto Xd */}
      <section className="border-black">
        <h1 className="font-semibold ml-5 mt-2 text-[20px]">
          {data.strMeal}
        </h1>
      </section>

      {/* Overlay que aparece al hacer hover */}
      <div className="absolute inset-0 bg-[#1f1f1f]/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <p className="text-white text-sm mb-4 line-clamp-3 text-center">
          {data.strInstructions?.substring(0, 100) || "Deliciosa receta para preparar en casa..."}
        </p>

        <Link to={`/receta/${data.strMeal}`}>
          {/* Botón */}
          <button className="px-4 py-2 bg-[#639661] text-white rounded-md hover:bg-[#8fc636] transition-colors duration-200">
            Ver Receta
          </button>
        </Link>
      </div>
    </div>
  );
}