import React from 'react'
import spaceWeb from './Assets/images/portfolio/spaceWeb.PNG'
import portfolioImg from './Assets/images/portfolio/portfolio.PNG'

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            imgscr:spaceWeb,
            demoLink:'https://spacetour022.netlify.app/',
            codeLink:'https://github.com/xclusive-3G/spaceTour'

        },
        {
            id: 2,
            imgscr:portfolioImg,
            demoLink:'https://sekani-portfolio.netlify.app/',
            codeLink:'https://github.com/xclusive-3G/myProfile'

        }
    ]
    return (
        <div name="portfolio" className=' w-full h-full bg-gradient-to-b from-black to-gray-900 px-4'>
            <div className=' max-w-screen-lg px-4 py-16 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className=' text-green-500 font-bold text-3xl'>Portfolio</p>
                    <p className='py-4 text-white'>Check out some of my work right here.</p>
                </div>
                <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 '>
                {portfolio && portfolio.map(({id,imgscr,demoLink,codeLink})=>(
                    
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={imgscr} alt="" className=' rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center text-white'>
                            <button className='w-1/2 duration-200  py-3 m-4 hover:scale-105'><a href={demoLink}>Demo</a></button>
                            <button className='w-1/2 duration-200  py-3 m-4 hover:scale-105'><a href={codeLink}>Code</a></button>
                        </div>
                    </div>
                
                ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio