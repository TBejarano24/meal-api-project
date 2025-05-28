import React from 'react'

export default function Navegador() {
    return (
        <div>
            <div className='flex items-center border border-white rounded-md overflow-hidden  bg-[#83ba67]'>
            
                <input type="text " placeholder=' Buscar una receta' className=' h-full  flex-grow pl-4 focus:outline-none text-white text-' />
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

        </div >
    )
}
