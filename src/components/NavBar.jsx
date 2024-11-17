import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import {Link} from "react-scroll"


const NavBar = () => {
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
                <Link to={link.link} smooth duration={500} >{link.link}</Link>
              </li>
          ))}
        </ul>
        <div>
        <CiMenuFries  size={35} className='flex md:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar