'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Rectangle from "@/public/shapes/shaperectangle.png"
import Circle from "@/public/shapes/shapecircle.png"
import Polygon from "@/public/shapes/shapepolygon.png"
import Link from 'next/link';

const Introduction = () => {

  const [sectionHeight, setSectionHeight] = useState('36rem'); 

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight * 0.91; 
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
         <h1 className='text-[38px] font-semibold leading-10 mb-5'>mernstack <br/> developer</h1>
         <p className='text-[16px] pb-3'>
         I am a passionate computer science student with a strong focus on web development particularly in front-end technologies. Coding is not just a skill but a love I actively pursue daily. Since Feb 2023, I have been dedicated to web development, thriving in both solo and team projects.</p>
         </div>

         <div className='text-[16px]'>
            <button className='bg-[#DC5F00] w-[50%] py-4'>contact/{'>'}</button>
            <button className='bg-[#777676] w-[50%] py-4'><Link href={'https://github.com/faizanalibaig'} target='_blank' >github/{'>'}</Link></button>
         </div>   

       </section>
    </section>

   </div>
  )
}

export default Introduction
