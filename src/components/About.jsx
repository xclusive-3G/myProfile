import React from 'react'
import { motion } from 'framer-motion'


const About = () => {
    return (
        <div name="about" className='w-full h-full px-4 py-16 flex justify-center items-center bg-gradient-to-b from-gray-500 to-black'>
            <motion.div className=' md:max-w-screen-xl w-screen  h-full'
                initial={{
                    y:120
                }}
                animate={{
                    y:0
                }}
                transition={{ duration:5, stiffness:500, type:'spring'}}
                viewport={{once:false,amount:0.7}}
            >
                <h1 className='text-3xl font-bold text-green-500'>About.</h1>
                <div className='px-4 text-white py-4'>
                    <p className='py-2'>Over the past three years, I’ve worked on a wide range of projects, from small-scale applications to
                        larger enterprise systems. I’ve collaborated with cross-functional teams, adhered to Agile methodologies,
                        and contributed to various stages of the software development lifecycle, including design, development,
                        testing, and deployment. This experience has shaped me
                        into a well-rounded developer, capable of taking on both frontend and backend challenges.
                    </p>

                    <p className='py-4'>
                        I’m particularly passionate about full-stack development, where I can leverage both my frontend
                        and backend skills to create seamless and end-to-end solutions. I believe in writing clean, maintainable
                        code and continuously improving the user experience.
                        My focus is on building applications that are not only functional but also intuitive, fast, and secure.
                    </p>
                    <h1 className='text-xl font-semibold underline'>Problem-Solving & Collaboration.</h1>
                    <p className='py-4'>What drives me every day is the opportunity to solve problems and make an impact.
                        Whether it’s building a complex feature, troubleshooting a bug, or improving an existing system,
                        I approach every task with curiosity and a problem-solving mindset. I take pride in my ability to
                        break down complex
                        challenges into manageable pieces, and I always look for the most efficient and effective solutions.</p>
                    <p className='py-4'>
                        I also value collaboration and teamwork. I’ve had the opportunity to work with diverse teams, both
                        small startups and larger organizations, and I thrive in environments where knowledge sharing and
                        constructive
                        feedback are encouraged. I’m always open to learning from others and helping my peers grow as well.
                    </p>
                    <h1 className='text-xl font-semibold underline'>Passion for Learning</h1>
                    <p className='py-4'>The tech world moves fast, and I believe that continuous learning is key to staying relevant and
                        effective. I’m always exploring new languages, frameworks, and development techniques, whether
                        it’s through online courses, reading technical blogs, or experimenting with side projects.
                        My goal is to stay at the cutting edge of
                        technology so I can apply the latest tools and best practices to the projects I work on.</p>
                    <p className='py-4'>I’m particularly interested in cloud computing, DevOps practices, and machine learning, and I’m currently
                        diving deeper into AWS and Docker to better understand modern deployment practices. These areas excite me
                        because they represent the future of software development, and I’m eager to be part of that evolution.</p>

                    <h1 className='text-xl font-semibold underline'>Looking Ahead</h1>
                    <p className='py-4'>As I continue to grow as a developer, I’m excited about the opportunities to take on more
                        complex challenges, collaborate with talented teams, and create software that makes a real
                        difference. Whether it's contributing to open-source projects, working on cutting-edge technology
                        stacks, or leading development teams in the future,
                        I’m committed to pushing myself and delivering high-quality, impactful software.</p>
                    <p className='py-4'>If you’re looking for a dedicated and versatile software developer with a solid foundation and
                        a passion for continuous improvement,
                        I’d love to connect and explore potential opportunities. Let’s build something great together!</p>
                </div>
            </motion.div>
        </div>
    )
}

export default About