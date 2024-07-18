import React from 'react'
import { motion } from "framer-motion"
import { BsArrowDownRight } from "react-icons/bs";
//mport { Link } from "react-router-dom";


const Service = () => {
  const Services = [
    {
      id: 1,
      num: "01",
      href: "#",
      title: "Web Development",
      description: " lorem 10"
    },
    {
      id: 2,
      num: "02",
      href: "#",
      title: "Logo Design",
      description: " lorem 10"
    },
    {
      id: 3,
      num: "03",
      href: "#",
      title: "Digital Merketing",
      description: " lorem 10"
    },
    {
      id: 4,
      num: "04",
      href: "#",
      title: "Machine Learning",
      description: " lorem 10"
    }
  ]
  return (
    <>
      <section className=' bg-gradient-to-b text-white from-black to-gray-800 w-full min-h-[80vh] flex flex-col justify-center py-12 md:py-0'>
        <div className=' container mx-auto'>
          <motion.div initial={{ opacity: 0 }} 
          animate={{ opacity: 1, 
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          >
            {Services.map((serves) => {
              return (
                <div key={serves.id} className='flex flex-col flex-1 justify-center gap-6 group'>
                  {/*top*/}
                  <div className=' w-full flex justify-between items-center'>
                    <div className=' text-5xl font-extrabold text-outline text-transparent group-hover:text-orange-600 transition-all duration-500'>{serves.num}</div>
                    <div className=' w-[70px] h-[70px] rounded-full  bg-white group-hover:bg-orange-600 transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className=' text-orange-600 text-3xl group-hover:text-white'/>
                    </div>
                  </div>
                  {/*Title*/}
                  <h2 className=' text-4xl font-bold leading-none text-white group-hover:text-orange-500 transition-all duration-500'>{serves.title}</h2>
                  {/*Description*/}
                  <p className=' text-white/60'>{serves.description}</p>
                  {/*border*/}
                  <div className=' border-b border-white/20 w-full'></div>
                </div>
              )
            })}

          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Service