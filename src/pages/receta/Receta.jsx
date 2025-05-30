import { useParams } from "react-router";
import useData from "../../hooks/useData";
import Indications from "../../components/Indications";
import Card_Container from "../../components/Card_Container";
import Card_recetas from "../../components/Card_recetas";



export default function Receta() {
  const { nombre } = useParams();

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nombre}`
  const { loading, error, response } = useData(url)

  if (loading) {
    return (
      <p className="text-center mt-20">Cargando</p>
    )
  }
  // TODO: simplify this logic
  if (error || !response || !response.meals || response.meals.length === 0) {
    return (
      <p className="text-center text-red-500 mt-10">Error al cargar los datos de la receta.</p>
    )
  }

  const apiMeals = response?.meals[0] || {}
  const miObjeto = response?.meals?.[0] || {}
  const ingredientes = Object.entries(miObjeto)
    ?.filter(([key, value]) => key.includes("strIngredient") && value.trim());
  const medidas = Object.entries(miObjeto)
    ?.filter(([key, value]) => key.includes("strMeasure") && value.trim());

  return (
    <>
    <Card_recetas/>

    
      <Indications
        recipe={apiMeals}
        ingredientes={ingredientes}
        medidas={medidas} />

      <Card_Container
        filter={
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${response?.meals[0].strCategory}`
        }
      />

    </>

  )

}
