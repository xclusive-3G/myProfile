import React from 'react'

const Contact = () => {
    return (

       /*work on the over flow on x */
        <div name="contact" className=' w-full h-full bg-gradient-to-b from-gray-800 to-black'>
            <div className='flex flex-col p-4 justify-center items-center mx-auto  w-3/4 h-full '>
                <div className='w-full h-full '>
                <p className='  text-green-500 text-3xl font-bold '>
                    Contact
                </p>
                <p className='py-6 text-white'>
                    Submit the form below to get in touch with me
                </p>
                </div>
                <div>   
                    <form action='' className=' flex flex-col w-full '>
                        <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name='email' placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-green-500 py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 
                        duration-300'>Let Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact