import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import axios from 'axios'

export default function CategoryBar() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {
                setData(response.data.categories)
            });
    }, [])


    return (
        <div className='flex items-center justify-center mt-60 overflow-x-auto m-auto scroll-hidden'>
            {
                data.map((category) => (
                    <CategoryItem
                        foto={category.strCategoryThumb}
                        nombre={category.strCategory}
                        key={category.idCategory}
                    />
                ))
            }
        </div>
    );
}
