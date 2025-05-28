import React from 'react'

export default function CategoryItem(props) {
  return (
     <div className='flex flex-col items-center justify-center px-4 shrink-0 '>
            <img src={props.foto} alt={props.nombre} className='w-[100px] p-4 m-auto'/>
            <h3 className='p-4 shrink-0 m-auto'>{props.nombre}</h3>
        </div>
  )
}
