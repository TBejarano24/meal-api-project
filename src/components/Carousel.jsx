import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SimpleCarousel() {
    const [carouselImages, setCarouselImages] = useState([]); // Almacenará las URLs de las imágenes para el carrusel
    const [loading, setLoading] = useState(true); // Estado para controlar la carga de las imágenes
    const [error, setError] = useState(null); // Estado para manejar errores de la API

    const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice del slide actual

    // Función para obtener una imagen aleatoria
    const fetchRandomMealImage = async () => {
        try {
            const response = await axios.get("http://www.themealdb.com/api/json/v1/1/random.php");
            const meal = response.data.meals[0]; // La API devuelve un array, tomamos el primer (y único) elemento
            return { src: meal.strMealThumb, alt: meal.strMeal || 'Random meal image' }; // Devuelve un objeto con src y alt
        } catch (err) {
            console.error("Error obteniendo imagenes:", err);
            return null; // Devuelve null si hay un error
        }
    };

    // useEffect para cargar las imágenes cuando el componente se monta
    useEffect(() => {
        const loadImages = async () => {
            setLoading(true); // Establece el estado de carga a true al inicio
            setError(null);    // Limpia cualquier error previo

            const desiredImageCount = 5; // Cantidad de imágenes que quieres en el carrusel
            const fetchedImages = [];

            // Hacemos múltiples peticiones para obtener varias imágenes
            for (let i = 0; i < desiredImageCount; i++) {
                const image = await fetchRandomMealImage();
                if (image) {
                    fetchedImages.push(image);
                }
            }

            if (fetchedImages.length > 0) {
                setCarouselImages(fetchedImages); // Almacena las imágenes obtenidas
            } else {
                setError("No se pudieron cargar las imágenes de las comidas.");
            }
            setLoading(false); // Una vez que terminan las peticiones, establece loading a false
        };

        loadImages(); // Llama a la función para cargar las imágenes
    }, []); // Array de dependencias vacío para que se ejecute solo al montar

    // Lógica del carrusel:
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    // Efecto para el auto-play (solo si hay imágenes cargadas)
    useEffect(() => {
        if (carouselImages.length === 0) return; // No iniciar si no hay imágenes

        const intervalId = setInterval(() => {
            goToNext();
        }, 5000); // Cambia de slide cada 5 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo
    }, [currentIndex, carouselImages.length]); // Dependencias: re-ejecuta si cambian las imágenes o el índice actual

    // Manejo de estados de carga y error
    if (loading) {
        return (
            <div className="flex items-center justify-center h-96 w-full bg-gray-100 rounded-lg text-gray-700">
                Cargando imágenes del carrusel...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-96 w-full bg-red-100 text-red-700 p-4 rounded-lg">
                Error al cargar: {error}
            </div>
        );
    }



    return (
        <div id="controls-carousel" className="relative w-full">
            {/* */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {carouselImages.map((image, index) => (
                    <div
                        key={image.src} // Usar src como key si es único, o un ID si la API lo proporciona
                        className={`absolute block w-full h-full transform transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={image.src}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-full"
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>

            {/* */}
            <button
                type="button"
                className="absolute top-0 start-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToPrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

            {/* */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {carouselImages.map((_, index) => (
                    <button
                        key={`indicator-${index}`}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-current={index === currentIndex ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default SimpleCarousel;