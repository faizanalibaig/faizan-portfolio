import React from 'react'
import Image from 'next/image'
import Rectangle from "@/public/shapes/shaperectangle.png"
import Circle from "@/public/shapes/shapecircle.png"
import Polygon from "@/public/shapes/shapepolygon.png"


const Introduction = () => {

  return (
    <div className="h-[90vh] w-full dark:bg-[#1A1C1B] bg-[#1A1C1B] dark:bg-grid-[#1A1C1B]/[0.2] 
        bg-grid-white/[0.2] flex items-center justify-center relative">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1A1C1B] 
     [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
        <Image src={Rectangle} alt='rectangle shape' className='w-[85px] absolute top-24 right-10'/>
        <Image src={Circle} alt='rectangle shape' className='w-[80px] absolute top-28 right-24 z-10'/>
        <Image src={Polygon} alt='rectangle shape' className='w-[80px] absolute top-32 right-12'/>

    <section className='w-full h-full flex items-end text-white'>
       
       <section className='w-full h-[55%] flex flex-col justify-between'>
         <div className='px-6'>
         <h1 className='text-[30px] font-semibold'>mernstack</h1>
         <h1 className='text-[30px] font-semibold mb-3'>developer</h1>
         <p className='text-[12px]'>
         I am a passionate computer science student with a strong focus on web development particularly in front-end technologies. Coding is not just a skill but a love I actively pursue daily. Since Feb 2023, I have been dedicated to web development.
         </p>
         </div>

         <div className='text-[12px]'>
            <button className='bg-[#DC5F00] w-[50%] py-3'>contact/{'>'}</button>
            <button className='bg-[#777676] w-[50%] py-3'>github/{'>'}</button>
         </div>   

       </section>
    </section>

   </div>
  )
}

export default Introduction
