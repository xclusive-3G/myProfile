import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Topnav = () => {
  const Links = [{
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'service'
  },
  {
    id: 3,
    link: 'resume',
  },
  {
    id: 4,
    link: 'contact'
  },
  {
    id: 5,
    link: <button className=' text-green-600'>Hire me</button>
  }
  ]
  // eslint-disable-next-line
{/* setting menu bar to open and close */}
   const [nav,setNav] = useState(false);

  return (
    <>
      <div className='flex justify-between w-full h-auto bg-transparent text-white py-4 px-8 z-20 fixed'>
        {/*Logo*/}
        <div>
          <h1 className='font-signature capitalize text-4xl font-bold' >Ayomide</h1>
        </div> 

        <div className='flex text-xl cursor-pointer'>
          {/*desktop view menu*/}
          <ul className='hidden md:flex' >
          {
            Links.map((link) => {
              return (
               
                  <li key={link.id} className=' md: flex-row items-center text-white  px-4 capitalize font-medium hover:scale-90'>{link.link}</li>
                
              )
            })
          }</ul>

          {/*Mobile View*/}
          <div onClick={()=>setNav(!nav)} className='md:hidden z-10'>
          {nav? <IoMdClose size={30}/>:<CiMenuFries size={30} />}
          </div>
          {nav && (
            <ul className='flex flex-col  justify-center items-center  bg-gradient-to-b from-black to-gray-800  text-gray-500 top-0 left-0 absolute w-full h-screen'>
            {
              Links.map((link) => {
                return (
                  
                    <li key={link.id} className='px-4 py-4 text-2xl capitalize cursor-pointer'>{link.link}</li>
                  
                )
              })
            }
  
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default Topnav