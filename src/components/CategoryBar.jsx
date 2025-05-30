import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategoryBar({ filter, setFilter }) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {
                setData(response.data.categories)
            });
    }, [])


    function renderCard(categoria) {
        setFilter(categoria);
    }


    return (
        <div className='flex items-center mt-5 overflow-x-auto m-auto scroll-hidden'>
            {
                data.map((category) => (
                    <div key={category.idCategory} className='flex flex-col items-center justify-center px-4 shrink-0  '>
                        <button className='cursor-pointer hover:bg-[#8fc636]/40 hover:rounded-md' onClick={() => renderCard(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)}>
                            <img src={category.strCategoryThumb} alt={category.strCategory} className='w-[100px] p-4 m-auto' />
                            <h3 className='p-4 shrink-0 m-auto'>{category.strCategory}</h3>
                        </button>
                    </div>
                ))
            }
        </div>
    );
}
