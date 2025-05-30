import React from 'react'

export default function Preparation({ recipe }) {
    let instRecipe = recipe.strInstructions.split(".") || [];


    if (instRecipe.at(-1)?.trim() === "") {
        instRecipe = instRecipe.slice(0, -1);
    }
  return (
     <section className="border border-[#8fc636] text-[#639661]  m-5 p-4 w-full">
                    <h2 className=" flex justify-left space-x-1 gap-2   p-4 mt-3 text-2xl">
                          Preparación de {recipe.strMeal}
                    </h2>

                    <ul className=' p-4 mt-0 list-disc ml-3 text-[#639661] '>

                        {
                            instRecipe.map((inst, i) => {


                                return (
                                    <li key={i}>
                                        {inst}
                                    </li>
                                )
                            })
                        }

                    </ul>
                </section>
  )
}
