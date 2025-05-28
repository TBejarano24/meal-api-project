import React from 'react'

export default function Card_Container() {
  return (
    
    
    // Esto es el Contenedor de las Cards
    <div className=' border-black w-[375px] h-[700px]  flex flex-col items-center mt'>
         {/*  Line  */}
       <div className='border-t-2 border-slate-500 w-[320px] mt-2'></div>  
         
         {/* Aqui esta el titulo de las Cards  */}
         <section className=' border-black  mt-2 '>
             <h1 className='font-bold text-[23px]'>RECETAS</h1>
         </section>



         {/*Aqui estan las Cards */}
         <section className='w-[320px] h-[90%]  border-black items-center flex flex-col'>

          <Card/>
         </section>
    </div>
  )
}





function Card(){
    
    
    
    return(
     <>
     <div className='w-[320px] h-[280px]  border-black'>
          {/*Aqui va la foto */}
             <section>
                    <img src='https://images.ecestaticos.com/yqxcdFHw5sq74TknwX2SX-svsz0=/43x0:984x706/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F465%2F787%2Ffe2%2F465787fe24f419c6651d4281d7758ee6.jpg' className='rounded-[16px] h-[200px] w-[320px]'></img>
             </section>
         
          {/* Aqui va el texto Xd*/}
          <section className=' border-black'>
                <h1 className='font-semibold ml-5 mt-2 text-[20px]'>Gatito sexy </h1>
          </section>
            
            
            {/*Meme */}
          <section className=''>
             <h1 className='font-semibold ml-7 mt-[-10px]  text-[16px]'>"(En celo)" </h1>
          </section>
     </div>
     
     
     
     </>
    )
}
