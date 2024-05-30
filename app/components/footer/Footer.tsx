import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

const socialaccounts=[
    {
        id:1,
        img:<TiSocialInstagram/>
    },{
        id:2,
        img:<FaGithubAlt/>
    },{
        id:3,
        img:<FaLinkedin/>
    }
]

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

const Footer: React.FC = () => {
  return (
      <footer className='bg-[#1A1C1B] h-[420px] w-full px-5 py-5 text-white mt-20'>
         <h1 className='text-[20px] font-medium'>faizanali./{'>'}</h1>

         <section className='flex flex-col py-10 gap-2'>
          {menuoption.map((value)=>{
            return(
              <p key={value.id} className='text-[16px]'><span className='border-b'>{`${value.title} />`}</span></p>
            )
          })}
         </section>

         <section className='flex items-center justify-between pb-10'>
           <h1 className='text-[16px] font-medium'>social accounts{'->'}</h1>
            <div className='flex items-center gap-3'>
            {socialaccounts.map((value)=>{
             return(
               <h1 key={value.id} className='text-[22px] cursor-pointer'>{value.img}</h1>
             )
           })}
            </div>
         </section>

         <section className='flex flex-col gap-3'>
            <p className='text-[14px]'>this is designed and developed by faizan ali baig.</p>
            <p className='text-[14px]'>all rights reserved © 2024</p>
         </section>
      </footer>
  )
}

export default Footer
