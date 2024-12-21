import React from 'react'
import {experienceData} from './Webdata/Experience'


const Experience = () => {
        return (
        <div name="experience" className=' bg-gradient-to-b  from-black to-gray-800  h-full'>
            <div className='max-w-screen-lg mx-auto px-6 py-14 flex-col justify-center w-full h-full '>
                <h1 className='text-green-500 text-3xl font-bold py-6'>Experience</h1>
                <p className='text-white'>These are the technology I've worked with</p>

                <div className=' justify-center items-center w-full  grid gird-cols-2 sm:grid-cols-3 text-center py-8 gap-8 sm:px-0'>
                    {experienceData && experienceData.map(({ id, title, src, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='img' className='w-1/2  mx-auto ' />
                            <p className='mt-4 text-white uppercase text-sm'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience