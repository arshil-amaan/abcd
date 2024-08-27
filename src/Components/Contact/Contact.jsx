import TextSnippet from '@mui/icons-material/TextSnippet';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Phone from '@mui/icons-material/PhoneEnabled';
import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import imageOverlay from '../../assets/earth.webp';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const url = import.meta.env.VITE_URL;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    console.log(url)
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!navigator.onLine) {
            toast.error('No internet connection. Please check your connection and try again.');
            return;
        }
        setIsLoading(true);
        toast.promise(
            axios.post(url, {
                data: [
                    {
                        id: "INCREMENT",
                        name: name,
                        email: email,
                        message: message,
                    },
                ],
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                return 'Message sent successfully.';
            }),
            {
                loading: 'Sending...',
                success: <b>Message Sent</b>,
                error: <b>Could not send.</b>,
            }
        ).catch((error) => {
            console.error('Error:', error);
            toast.error('Couldn\'t send message.');
        }).finally(() => {
            setIsLoading(false);
        });
    };


    return (
        <Parallax bgImage={imageOverlay} bgImageAlt="layered earth" bgImageStyle={{ objectFit: 'cover' }} strength={-150} className='relative '>
            <Toaster />
            <section id='contact' className='flex justify-center items-center py-16 px-4 sm:px-8'>
                <div className="container mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg p-6 lg:p-12">
                    <div className='w-full lg:w-1/2 px-4 sm:px-6 mb-8 lg:mb-0 text-slate-700'>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
                        <form onSubmit={submitHandler}>
                            <div className="mb-4 text-xl" >
                                <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                    placeholder="Enter your name"
                                    type="text"
                                    id="name"
                                    value={name} onChange={(e) => setName(e.target.value)} required
                                />
                            </div>
                            <div className="mb-4 text-xl">
                                <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                                <input
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                    placeholder="Enter your email"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={email} onChange={(e) => { setEmail(e.target.value); console.log(email) }} required
                                />
                            </div>
                            <div className="mb-4 text-xl">
                                <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                                <textarea
                                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-300"
                                    rows="4"
                                    placeholder="Enter your message"
                                    name="message"
                                    id="message"
                                    value={message} onChange={(e) => setMessage(e.target.value)} required
                                ></textarea>
                            </div>
                            <button
                                className="flex items-center bg-cyan-400 gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest text-xl rounded-md
                                hover:bg-cyan-500 duration-300 hover:gap-2 hover:translate-x-3 hover:shadow-[4px_4px_7px_black]
                                focus:outline-none focus:ring-2 focus:ring-cyan-300
                                active:bg-cyan-600 active:translate-x-4 active:translate-y-[0.10rem] active:shadow-none"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Send'}
                                <svg
                                    className="w-5 h-5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className='w-full lg:w-1/2 px-4 sm:px-6'>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>

                        <p className='text-gray-800 text-xl mb-6 md:my-12'>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill out the form or send me an email.</p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
                            <a href="https://drive.google.com/drive/folders/16cqxgYdWWXXogeputCJBm4x0NnsUURnY?usp=sharing" target='_blank' rel="noopener noreferrer" title="View my Resume" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <TextSnippet className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]'
                                    style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }}
                                />
                            </a>
                            <a href="https://github.com/arshil-amaan" target='_blank' rel="noopener noreferrer" title="Visit my Github" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none
            ">
                                <GitHub className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]
                                ' style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/arshil-amaan/" target='_blank' rel="noopener noreferrer" title="Visit my LinkedIn" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <LinkedIn className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} />
                            </a>
                            <a href="mailto:arshilamaanansari@gmail.com" target='_blank' rel="noopener noreferrer" title="Mail me" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <Email className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} />
                            </a>
                            <a href="tel:+91-7786989680" title="Call me"
                                className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <Phone className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} />
                            </a>
                            <a href="https://wa.me/917786989680" target='_blank' rel="noopener noreferrer" title="WhatsApp me" className="flex items-center justify-center cursor-pointer md:w-fit w-1/4
               transition-transform duration-300
               hover:gap-2 hover:-translate-x-1 hover:-translate-y-1
               active:translate-x-1 active:translate-y-1 active:shadow-none">
                                <WhatsApp className='rounded-full hover:shadow-[4px_4px_7px_#cab76e]' style={{ fill: "rgb(31 41 55)", fontSize: "50px", padding: "5px", border: "5px #fde68a solid" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Parallax>
    );
};

export default Contact;
