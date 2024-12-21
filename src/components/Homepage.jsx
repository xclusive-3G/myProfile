import React from 'react'
// adding Profile Image 
import homeImage from './Assets/images/displayImage.jpeg'
import { FaArrowRight } from "react-icons/fa6";
// adding react scroll
import { Link } from "react-scroll"
// adding frame motion
import { motion } from 'framer-motion';
// importing amination
import {fade} from './Amination/Fade'


export const Homepage = () => {
  const TitleFadeAmination = fade("left",0.4)
  const subTitleAmination = fade("up",0.5)
  return (
    <div name="home" className='w-full h-full   md:h-screen justify-center flex bg-gradient-to-b from-black to-gray-500 '>
      <div className=' grid md:flex px-10  py-2 mt-5 md:grid-cols-2 md:w-3/4 h-full  items-center'>
        <div className='md:w-1/2 order-2 md:order-1 mt-4'>
          <motion.h3
          className='text-green-500 text-3xl font-bold md:pt-20 md:pb-4'
          variants={TitleFadeAmination}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          >I'm a Software Developer.</motion.h3>
          <motion.p className='text-white'
            variants={subTitleAmination}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once:false,amount:0.6}}
          >I have 3 years of experience building and designing software. Currently,
            i love to work on web application using technology like React,Tailwind, Node Js, python and Mongo-DB.</motion.p>
          <p>
          <Link to='portfolio' smooth >
            <motion.button  className='flex p-2 text-white bg-green-500 my-3 rounded-md font-bold group'
              variants = {subTitleAmination}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false,amount:0.6}}
            >
             
                <span className='p-1.5 '>Portfolio</span>
                <FaArrowRight className='mt-3 mx-1 group-hover:rotate-90 duration-300' />
              
            </motion.button>
            </Link>
          </p>
        </div>
        <div className='order-1 mt-24 md:mt-2 pt-3 md:pt-0 md:order-2'>
          <motion.img className='mx-auto rounded-2xl w-full h-96 md:w-80 md:ml-16 ' src={homeImage} alt="HomeImage" srcset="" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
          />
        </div>
      </div>
    </div>
  )
}
