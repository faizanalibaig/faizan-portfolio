'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Rectangle from "@/public/shapes/shaperectangle.png"
import Circle from "@/public/shapes/shapecircle.png"
import Polygon from "@/public/shapes/shapepolygon.png"


const Introduction = () => {

  const [sectionHeight, setSectionHeight] = useState('36rem'); 

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight * 0.92; 
      setSectionHeight(`${height}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="w-full dark:bg-[#1A1C1B] bg-[#1A1C1B] dark:bg-grid-[#1A1C1B]/[0.2] 
        bg-grid-white/[0.2] flex items-center justify-center relative" style={{ height: sectionHeight }}        >
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#1A1C1B]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      
        <Image src={Rectangle} alt='rectangle shape' className='w-[100px] absolute top-24 right-10'/>
        <Image src={Circle} alt='rectangle shape' className='w-[95px] absolute top-28 right-24 z-10'/>
        <Image src={Polygon} alt='rectangle shape' className='w-[95px] absolute top-32 right-12'/>

    <section className='w-full h-full flex items-end text-white'>
       
       <section className='w-full h-[60%] flex flex-col justify-between'>
         <div className='px-5'>
         <h1 className='text-[38px] font-semibold'>mernstack</h1>
         <h1 className='text-[38px] font-semibold mb-3'>developer</h1>
         <p className='text-[15px] pb-3'>
         I am a passionate computer science student with a strong focus on web development particularly in front-end technologies. Coding is not just a skill but a love I actively pursue daily. Since Feb 2023, I have been dedicated to web development.
         </p>
         </div>

         <div className='text-[15px]'>
            <button className='bg-[#DC5F00] w-[50%] py-3'>contact/{'>'}</button>
            <button className='bg-[#777676] w-[50%] py-3'>github/{'>'}</button>
         </div>   

       </section>
    </section>

   </div>
  )
}

export default Introduction
