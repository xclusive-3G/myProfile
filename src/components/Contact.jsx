import React from 'react'

const Contact = () => {
    return (
        <div name="contact">
            <div>
                <p>
                    Contact
                </p>
                <p>
                    Submit the form below to get in touch with me
                </p>
                <div>   
                    <form action=''>
                        <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name='email' placeholder='Enter Your Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact