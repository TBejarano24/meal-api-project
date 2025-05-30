import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router";

export default function Navegador() {
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    let navigate = useNavigate();
    async function handleChange(e) {
        const value = e.target.value;
        setInputValue(value);

        if (value.length === 0) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
            const data = response.data;
            if (data.meals.length) {
                const nombres = data.meals.map(meal => meal.strMeal);
                setSuggestions(nombres);
                setShowSuggestions(true);
            } else {
                setSuggestions([]);
                setShowSuggestions(false);

            }
        } catch (error) {
            console.error("Error al cargar sugerencias", error);
            setSuggestions([]);
            setShowSuggestions(false);
        }

    }

    function handleSuggestionClick(suggestion) {
        setInputValue(suggestion);
        setSuggestions([]);
        setShowSuggestions(false);        
        navigate(`/receta/${suggestion}`)

    }

    return (
        <div>
            <div className='flex items-center border border-white rounded-md overflow-hidden  bg-[#83ba67]'>

                <input type="text" value={inputValue} onChange={handleChange} placeholder=' Buscar una receta' className=' h-full  flex-grow pl-4 focus:outline-none text-white ' />
                <button className=' px-4 py-1 bg-[#639661] border-l border-white  border-t-none border-b-none h-full cursor-pointer hover:bg-[#85ba83] active:bg-[#85ba83]'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="size-6">

                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            <div className='overflow-hidden m-auto w-[450px] md:max-w-[420px]'>
                {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-[#639661] border border-gray-300 mt-1 rounded-md max-h-60 overflow-y-auto shadow-md">
                        {suggestions.map((item, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-[#8fc636]"
                                onClick={() => handleSuggestionClick(item)}
                            >                            
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div >
    )
}

