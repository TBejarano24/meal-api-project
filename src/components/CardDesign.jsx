// Este es el componente que contiene el diseño estándar de las cards

/*Recibe el prop "data", el cual contiene un objeto con los datos de la receta correspondiente
(Sólo tiene la imagen, el nombre y la id, si quieren pueden sugerir cambios)*/
export default function CardDesign({ data }) {
  //Esto está acá por si quieren ver los valores de "data"
  //   console.log(data);

  return (
    <>
      <div className="w-[90%] h-[280px]  border-black justify-self-center">
        {/*Aqui va la foto */}
        <section>
          <img
            src={data.strMealThumb}
            className="rounded-[16px] h-[200px] w-[320px]"
          ></img>
        </section>

        {/* Aqui va el texto Xd*/}
        <section className=" border-black">
          <h1 className="font-semibold ml-5 mt-2 text-[20px]">
            {data.strMeal}
          </h1>
        </section>
      </div>
    </>
  );
}
