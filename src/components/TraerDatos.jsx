import { useState, useEffect } from "react";
import axios from "axios";

export default function TraerDatos({ ingrediente }) {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData(url) {
        try {
            const response = await axios.get(url);
            setPhotos(response.data.meals || [])
            console.log(response.data.meals)
        } catch (error) {
            setError("Error al cargar las fotos: " + error.message);
            console.error("Error fetching photos:", error);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        if (ingrediente) {
            setLoading(true);
            setError(null);
            fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`
            );
        }
    }, [ingrediente])

    if (loading) {
        return (
            <div className="w-full h-full pt-[100px] flex flex-wrap border-3">
                <p>Cargando recetas de {ingrediente}...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full pt-[100px] flex flex-wrap border-3"
                style={{ color: "red" }}>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <div className="w-full h-full pt-[100px] flex flex-wrap gap-3">
                <h1 className="w-full">Recetas:</h1>
                {photos.map(photo => (
                    <div key={photo.idMeal} className="flex flex-col border-1 w-[150px] h-[200px]">
                        <img src={photo.strMealThumb} alt={photo.strMeal} />
                        <p>{photo.strMeal}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
