import React from 'react'

export default function Ingredientes({ ingredientes, medidas }) {
    return (
        <section className='border border-[#8fc636] m-5 p-4 w-full'>

            <h2 className='flex justify-left space-x-1 gap-2 p-4 mt-3 text-2xl'>Ingredientes</h2>
            <div>
                <ul className=' p-4 mt-0 list-disc ml-3'>
                    {medidas.map((medida, i) => {
                        let ingrediente = ingredientes[i]
                        return (
                            <li key={i} className='py-2'>{medida[1]} - {ingrediente[1]} </li>
                        )
                    })}
                </ul>

            </div>
        </section>
    )
}
