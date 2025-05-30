import React from 'react'

export default function Card_recetas() {
  return (
    <div className='flex lg:flex-row flex-col  border-black h-[420px] ' >
        {/* Section Imagen/Video */}
      <section className=' border-black lg:h-[400px] lg:w-[800px]  w-[350px] h-[400px] flex justify-end  lg:ml-0 '>
        <img src='https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg' className='rounded-[10px] lg:ml-0 ml-5 lg:w-[600px] lg:h-[400px] h-[280px] w-[350px]'/>
        </section>



        {/* Section Informacion de Card*/} 
        <section className=' border-black h-[200px] w-[700px]' >
               {/* Titulo de la Receta */}
              <section className=' border-black w-[100%] h-[100px]' > 
                      <h1 className='flex  lg:ml-8 lg:mt-10 font-bold lg:text-[50px] ml-5 text-[30px]'>Keleya Zaara</h1>  
              </section>         

                {/* Categoria de la Receta */}
                 <section className=' border-black w-[200px] h-[70px] lg:mt-[-40px] mt-[-55px]' > 
                      <h1 className='lg:ml-10 lg:mt-5 lg:text-[20px] text-[#3636368f]  font-semibold ml-5 '>Categorie : Lamb</h1>
                      <h1 className='lg:ml-10  lg:text-[20px] text-[#3636368f] font-semibold ml-5'> Area : Tunisian</h1> 
              </section>  
                  
                  {/* Elaboracion */}
                 <section className=' border-black w-[375px] lg:w-[100%] h-[100%]' > 
                      <h1 className='lg:mx-10 mx-4 lg:mt-0 mt-[-13px]'>"Heat the vegetable oil in a large frying pan over medium-high heat. Add the lamb and cook until browned on all sides, about 5 minutes. Season with saffron, salt and pepper to taste; stir in all but 4 tablespoons of the onion, and pour in the water. Bring to the boil, then cover, reduce heat to medium-low, and simmer until the lamb is tender, about 15 minutes.\r\nUncover the pan, stir in the butter and allow the sauce reduce 5 to 10 minutes to desired consistency. Season to taste with salt and pepper, then pour into a serving dish. Sprinkle with the remaining chopped onions and parsley. Garnish with lemon wedges to serve.\r\n"</h1>  
              </section> 


               



        </section>
    </div>
  )
}
