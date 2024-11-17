import React from 'react'
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import {Link} from "react-scroll"
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false)
    const links = [
        {
          id: 1,
          link: 'home'
        },
        {
          id:2,
          link:'about'
        },
        {
          id:3,
          link:'portfolio'
        },
        {
          id:4,
          link:'experience'
        },
        {
          id:5,
          link:'contact'
        }
      ]
  return (
    <div className=' justify-between flex w-full h-auto bg-black z-50 fixed'>
      <div className='text-gray-300  font-semibold text-xl p-4 '>
        <h1 className=' font-signature text-3xl font-thin'>AYOMIDE</h1>
      </div>
      <div className='flex text-gray-400 font-medium p-4 capitalize '>
        <ul className=' hidden md:flex'> 
          {links.map(link=>(
              <li className='px-4 cursor-pointer hover:scale-125 duration-200 
              hover:text-green-500 hover:uppercase' key={link.id}>
                <Link to={link.link} smooth duration={800} >{link.link}</Link>
              </li>
          ))}
        </ul>
        <div onClick={()=>setNav(!nav)} className='pr-4 cursor-pointer z-50 md:hidden '>
        {nav ? <MdClose size={35}/>: <CiMenuFries  size={35} />}
        </div>
        <div>
          {nav&& (
            <ul className='flex flex-col justify-center items-center absolute top-0 
            left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>
              {links.map(link=>(
              <li className='px-4 cursor-pointer capitalize py-6 text-4xl' key={link.id}>
                  <Link to={link.link} smooth duration={800} onClick={()=>setNav(!nav)} >{link.link}</Link>
                </li>
                 ))}
            </ul>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default NavBar