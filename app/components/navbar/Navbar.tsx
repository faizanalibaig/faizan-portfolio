'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import MenubarImage from '@/public/navbar/menubar.png';
import { RiMenuLine } from "react-icons/ri";
import { LuPanelBottomClose } from "react-icons/lu";

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

  const openMenu = () => {
    setMenu(true);
  }

  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <nav className='bg-[#1A1C1B] text-[#FFFFFF] relative'>
      <header className='px-5 py-5 flex justify-between items-center'>
        <h1 className='text-[20px] font-medium'>faizanali./{'>'}</h1>
        <RiMenuLine onClick={openMenu} className='rounded-none text-[20px]' />
      </header>
      {
       menu && 
       <div className='bg-[#1A1C1B] border-b border-[#777676] h-[200px] w-full absolute z-20 top-0 px-5 py-8 flex flex-col justify-between'>
         <div className='flex items-center justify-between'>
          <h1 className='text-[20px] font-medium'>faizanali./{'>'}</h1>
          <LuPanelBottomClose className='text-[22px]' onClick={closeMenu}/>
         </div> 
         <section className='flex justify-between'>
          {menuoption.map((value)=>{
            return(
              <p key={value.id} className='border-b text-[16px]'>{`${value.title} />`}</p>
            )
          })}
         </section>
       </div>
      }
    </nav>
  );
}

export default Navbar;
