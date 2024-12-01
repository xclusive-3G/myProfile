// calling the dependencies 
import React from 'react'
import {portfolio} from './Webdata/PortfolioData'
import { motion } from 'framer-motion'


const Portfolio = () => {
    // data in portfolio
    
    return (
        <div name="portfolio" className=' w-full h-full bg-gradient-to-b from-black to-gray-900 px-4'>
            <div className=' max-w-screen-lg px-4 py-16 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className=' text-green-500 font-bold text-3xl'>Portfolio</p>
                    <p className='py-4 text-white'>Check out some of my work right here.</p>
                </div>
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 '>
                {portfolio && portfolio.map(({id,imgscr,demoLink,codeLink})=>(
                    // adding motion to the portfolio
                    <motion.div key={id} className='shadow-md shadow-gray-600 rounded-lg'
                        initial={{
                            y:'-100vh'
                        }}
                        animate={{
                            y:0
                        }}
                        transition={{
                            duration:3,  stiffness:500, type:'spring'
                        }}
                    >
                        <img src={imgscr} alt="" className=' rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center text-white'>
                            <button className='w-1/2 duration-200  py-3 m-4 hover:scale-105'><a href={demoLink}>Demo</a></button>
                            <button className='w-1/2 duration-200  py-3 m-4 hover:scale-105'><a href={codeLink}>Code</a></button>
                        </div>
                    </motion.div>
                
                ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio