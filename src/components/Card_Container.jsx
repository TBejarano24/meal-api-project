import CardDesign from "./CardDesign";
import { useState, useEffect } from "react";
import axios from "axios";

/*Este es el componente donde se van a insertar las cards, recibe como prop "filter"
el cual viene (por ahora) desde App.jsx.*/
export default function Card_Container({ filter }) {
  //Acá está el estado que va a guardar los datos de la api
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //useEffect y la función que solicita y obtiene los datos requeridos
  //Por el momento estoy usando el endpoint de la región de la comida
  //Puede cambiar...
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(`${filter}`);
        setData(response.data.meals);

        //Si hay un error se pesca acá
      } catch (error) {
        console.error(error);
        setError(error.message);

        //Se cambia el estado de loading a false
      } finally {
        setLoading(false);
      }
    };

    //Se ejecuta la función para traer datos, detectar errores y modificar el estado de carga
    fetchData();
  }, [filter]);

  //Mientras los datos aún no llegan, se muestra este elemento
  if (loading) {
    return (
      <p className="text-[50px] my-20 font-bold text-center text-[#3e5f3d] sm:col-span-2 lg:col-span-3">
        Cargando contenido...
      </p>
    );
  }

  //Si hay un error al traer los datos se muestra este mensaje
  if (error) {
    return (
      <div className="my-20 max-w-[300px] justify-self-center sm:max-w-[620px]">
        <p className="text-[50px] text-[#8b1515] font-bold text-center sm:col-span-2 lg:col-span-3">
          Oops, algo salió mal
        </p>
        <p className="text-[20px] font-semibold text-[#5e5e5e] text-center sm:col-span-2 lg:col-span-3">
          Ajuste los filtros de búsqueda o inténtelo más tarde
        </p>
        <p className="text-[15px] font-medium text-[#5e5e5e] text-center sm:col-span-2 lg:col-span-3">
          Error específico: {error}
        </p>
      </div>
    );
    //Si en cambio, los resultados están vacíos, se recomienda ajustar los filtros
  } else if (data === null) {
    return (
      <div className="my-20">
        <p className="text-[50px] text-[#8b1515] font-bold text-center sm:col-span-2 lg:col-span-3">
          No hay resultados
        </p>
        <p className="text-[20px] font-semibold text-[#5e5e5e] text-center sm:col-span-2 lg:col-span-3">
          Ajuste los filtros de búsqueda
        </p>
      </div>
    );
  }

  //Se renderiza el contenedor de las cards
  return (
    <div>
      {/*  Línea divisora  */}
      <div className="border-t-2 border-slate-500 w-[90%] mt-2 justify-self-center"></div>

      {/* Aqui esta el titulo de las Cards  */}
      <section className=" border-black  my-5 ">
        <h1 className="font-bold text-[23px] justify-self-center">RECETAS</h1>
      </section>
      {/* Esto es el Contenedor de las Cards */}
      <div className=" border-black w-full max-w-[300px] grid grid-cols-1 justify-self-center sm:max-w-[620px] sm:grid-cols-2 lg:max-w-[1004px] lg:grid-cols-3">
        {/* Acá se insertan las cards a través de un operador ternario. Si hay datos, se insertan */}
        {data?.map((meal) => {
          return <CardDesign data={meal} key={meal.idMeal} />;
        })}
      </div>
    </div>
  );
}
