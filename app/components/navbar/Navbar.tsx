'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import MenubarImage from '@/public/navbar/menubar.png';
import { RiMenuLine } from "react-icons/ri";

const menuoption=[
  {
    id:1,
    title:'home'
  },{
    id:2,
    title:'contact'
  },{
    id:3,
    title:'about'
  },{
    id:4,
    title:'resume'
  }
]

const Navbar= () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(prevMenu => !prevMenu);
  }

  return (
    <nav className='bg-[#1A1C1B] text-[#FFFFFF] relative'>
      <header className='px-5 py-5 flex justify-between items-center'>
        <h1 className='text-[22px] font-medium'>faizanali./{'>'}</h1>
        <RiMenuLine onClick={toggleMenu} className='rounded-none text-[22px]' />
      </header>
      {
       menu && 
       <div className='bg-[#1A1C1B] h-[200px] w-full absolute z-20 top-0 px-5 py-5 flex flex-col justify-between'>
         <h1 className='text-[22px] font-medium'>faizanali./{'>'}</h1>
         <section className='flex justify-between'>
          {menuoption.map((value)=>{
            return(
              <p key={value.id} className='border-b text-[18px]'>{`${value.title} />`}</p>
            )
          })}
         </section>
       </div>
      }
    </nav>
  );
}

export default Navbar;
