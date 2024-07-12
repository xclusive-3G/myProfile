import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-tr from-black  to-gray-800' name ='home'>
      <div className=' max-w-screen-lg flex flex-col mx-auto px-4 h-full justify-center items-center md:flex-row'>
        <div className='flex flex-col justify-center w-3/4 md:justify-normal my-6 order-2 md:order-1'>
          <span className=' text-orange-300 '>Software Developer</span>
          <h2 className=' text-white text-4xl '>Hello I'm</h2>
          <h2 className=' text-orange-500 text-4xl'>Ayomide Akinrata.</h2>
          <div className=' text-white'>
          <p>I excel at crafting elegant digital experience and</p>
          <p>I am proficient in various programming languages and</p>
          <p>technologies.</p>
          </div>
        </div>
        <div className=' text-white order-1 md:order-2'>
          photo
        </div>
      </div>
    </div>
  )
}

export default Home