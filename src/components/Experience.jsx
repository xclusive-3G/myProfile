import React from 'react'
import htmlImg from './Assets/images/experienceImg/html.png'
import cssImg from './Assets/images/experienceImg/css.png'
import tailwindImg from './Assets/images/experienceImg/tailwind.png'
import jsImg from './Assets/images/experienceImg/js.png'
import nodeImg from './Assets/images/experienceImg/js2.png'
import pythonImg from './Assets/images/experienceImg/python.png'
import github from './Assets/images/experienceImg/github.png'
import bash from './Assets/images/experienceImg/bash.png'

const Experience = () => {
    const experienceData = [
        {
            id: 1,
            title: 'HTML',
            src: htmlImg,
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            title: 'CSS',
            src: cssImg,
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            title: 'Tailwind',
            src: tailwindImg,
            style: 'shadow-white'
        },
        {
            id: 4,
            title: 'Node Js',
            src: jsImg,
            style: 'shadow-green-500'
        },
        {
            id: 5,
            title: 'Javascript',
            src: nodeImg,
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            title: 'python',
            src: pythonImg,
            style: ' shadow-blue-600'
        },
        {
            id: 7,
            title: 'github',
            src: github,
            style: ' shadow-gray-400'
        },
        {
            id: 8,
            title: 'bash',
            src: bash,
            style: ' shadow-black'
        },


    ]
    return (
        <div name="experience" className=' bg-gradient-to-b  from-black to-gray-800  h-full'>
            <div className='max-w-screen-lg mx-auto px-6 py-14 flex-col justify-center w-full h-full '>
                <h1 className='text-green-500 text-3xl font-bold py-6'>Experience</h1>
                <p className='text-white'>These are the technology I've worked with</p>

                <div className=' justify-center items-center w-full  grid gird-cols-2 sm:grid-cols-3 text-center py-8 gap-8 sm:px-0'>
                    {experienceData && experienceData.map(({ id, title, src, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='img' className='w-1/2 mx-auto ' />
                            <p className='mt-4 text-white uppercase text-sm'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience