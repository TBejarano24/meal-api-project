import React from 'react'
import Ingredientes from './Ingredientes';
import Preparation from './Preparation';

export default function Indications({ recipe, ingredientes, medidas }) {
    let instRecipe = recipe.strInstructions.split(".") || [];


    if (instRecipe.at(-1)?.trim() === "") {
        instRecipe = instRecipe.slice(0, -1);
    }
    return (
        <section className='mt-20 max-w-6xl m-auto text-[#639661] '>
            <h2 className='p-4 text-3xl '>
                ¿Cómo hacer <span>{recipe.strMeal}?</span> </h2>
            <div className='text-[#639661] '>
                <Ingredientes
                    ingredientes={ingredientes}
                    medidas={medidas}
                />
                <Preparation
                    recipe={recipe}
                />
            </div>

        </section>
    )
}
