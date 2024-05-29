import React from 'react'
import Image from 'next/image'
import MenubarImage from '@/public/navbar/menubar.png'
import { RiMenuLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className='px-4 py-4 bg-[#1A1C1B] text-[#FFFFFF]'>
      <header className='flex justify-between items-center'>
        <h1 className='text-[18px] font-medium'>faizanali./{'>'}</h1>
        {/* <Image src={MenubarImage} alt="menu icon" className='w-auto h-'/> */}
        <RiMenuLine className=' rounded-none text-[18px]'/>
      </header>
   </nav>
  )
}

export default Navbar
