import React from 'react'
import Hero from './assets/pictures/Hero.jpeg'
import { IoChevronForwardOutline } from "react-icons/io5";



const Home = () => {
  return (
    <div className='w-full pt-20 h-auto md:h-screen md:pt-auto bg-gradient-to-tr from-black   to-gray-800' name ='home'>
      <div className=' max-w-screen-lg flex flex-col mx-auto px-4 h-full justify-center items-center md:flex-row'>
        <div className='flex flex-col w-full sm:w-96 justify-center md:w-2/3 md:justify-normal my-6 md:my-auto order-2 md:order-1'>
          <span className=' text-orange-300 '>Software Developer</span>
          <h2 className=' text-white text-4xl '>Hello I'm</h2>
          <h2 className=' text-orange-500 text-4xl'>Ayomide Akinrata.</h2>
          <div className=' text-white'>
          <p>I excel at crafting elegant digital experience and</p>
          <p>I am proficient in various programming languages and</p>
          <p>technologies.</p>
          </div>
          <div className=' mt-2'>
            <button className=' group text-white py-3 px-4 flex items-center h-auto bg-orange-500 rounded-md font-bold'>
              Services <span className=' group-hover:rotate-90 duration-200 px-2'>
              <IoChevronForwardOutline />
                </span> </button>
          </div>
        </div>
        <div className=' max-w-fit sm:w-96 md:max-w-full md:w-80 md:h-96  text-white order-1 md:order-2'>
          <img src={Hero} alt="" className=' h-full w-full rounded-xl' />
        </div>
      </div>
    </div>
  )
}

export default Home