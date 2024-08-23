import TextSnippet from '@mui/icons-material/TextSnippet';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import React from 'react';
import imageOverlay from '../../assets/earth.jpg';

const Contact = () => {
    return (
        <section id='contact'
            style={{ backgroundImage: `url(${imageOverlay})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='flex justify-center items-center p-16'
        >
            <div className="container mx-auto px-8 flex py-6 bg-gray-100 rounded-lg shadow-lg">
                <div className='w-full px-6'>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                id="name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                placeholder="Enter your email"
                                name="email"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                rows="4"
                                placeholder="Enter your message"
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <button
                            className="w-full bg-amber-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className='flex flex-col w-full px-6'>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                    <p className='text-gray-800'>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.</p>
                    <div className="flex gap-4 mt-5">
                        <a href="https://drive.google.com/drive/folders/16cqxgYdWWXXogeputCJBm4x0NnsUURnY?usp=sharing" target='_blank' rel="noreferer noopener">
                            <TextSnippet style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} className='rounded-full cursor-pointer' />
                        </a>
                        <a href="https://github.com/arshil-amaan" target='_blank' rel="noreferer noopener">
                            <GitHub style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} className='rounded-full cursor-pointer' />
                        </a>
                        <a href="https://www.linkedin.com/in/arshil-amaan/" target='_blank' rel="noreferer noopener">
                            <LinkedIn style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} className='rounded-full cursor-pointer' />
                        </a>
                        <a href="mailto:arshilamaanansari@gmail.com" target='_blank' rel="noreferer noopener">
                            <Email style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} className='rounded-full cursor-pointer' />

                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
