import React from 'react'

export const Homepage = () => {
  return (
    <div className='w-full h-screen flex justify-center bg-gradient-to-b from-black to-gray-500 '>
      <div className='flex grid-cols-2 w-3/4 h-full  items-center'>
        <div className=''>
          <h3 className='text-green-500 text-3xl font-bold'>I'm a Software Developer</h3>
          <p className='text-white'>i have 3 years of experience building and designing software. Currently, 
            i love to work on web application using technology like React,Tailwind, Node Js, python and Mongo DB</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quod molestiae dolorem nisi optio fuga similique ducimus adipisci illo tempora, hic delectus enim expedita consequuntur nulla quae ut! Voluptatem, cum.</p>
        </div>
      </div>
    </div>
  )
}
