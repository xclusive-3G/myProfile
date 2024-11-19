import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs"
import { motion } from 'framer-motion';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedLin <FaLinkedin size={30} />
                </>
            ),
            href:"https://www.linkedin.com/in/ayomide-akinrata-9a6239194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            style: 'rounded-tr-md'
        },{
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href:"https://github.com/xclusive-3G"
        },{
            id: 3,
            child: (
                <>
                    Email <MdOutlineEmail size={30} />
                </>
            ),
            href:"mailto:akinrataa@gmail.com"
        },{
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href:"/AyomideCv.pdf",
            style:'rounded-br-md',
            download: true
            
        }
    ]
    return (
        <motion.div className='hidden md:flex flex-col top-[35%] left-0 fixed'
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1
            }}
            transition={{
                duration:4
            }}
        >
            <ul>
                {links.map(link=>(
                    <li key={link.id} className={'flex justify-center items-center p-4 w-36 h-14 bg-gray-800 font-bold text-sm duration-100 ml-[-100px] hover:ml-[-10px] ' + link.style}>
                    <a href={link.href} className='flex justify-between items-center w-full text-white' download={link.download} target='_blank' rel="noreferrer">
                        {link.child}
                    </a>
                </li>
                ))}
                
            </ul>
        </motion.div>
    )
}

export default SocialLinks