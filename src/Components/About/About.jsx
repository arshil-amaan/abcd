import myImg from '../../assets/portfolio-pic.png';
import React from 'react';
import { AttentionSeeker, Bounce } from "react-awesome-reveal";
import Button from './Button/Button';

const About = () => {
    return (
        <div id='about-section'>
            <div className='about-wrapper flex flex-col-reverse lg:flex-row text-slate-800'>
                {/* <div className=' w-full p-12' style={{background: 'linear-gradient(to right, #22d3ee 98%, #fde68a 100%)'}}> */}
                <div className='bg-cyan-400 w-full p-12 md:bg-custom-gradient'>
                    <h2 className='text-5xl md:text-7xl font-semibold md:ml-6'>Welcome<Bounce style={{animationIterationCount: 'infinite'}} className='inline-block'>.</Bounce><Bounce style={{animationIterationCount: 'infinite', animationDelay: '166ms'}} className='inline-block'>.</Bounce><Bounce style={{animationIterationCount: 'infinite', animationDelay: '333ms'}} className='inline-block'>.</Bounce></h2>

                    <p className='leading-7 text-center md:text-left md:leading-9 text-sm md:text-2xl mt-10 mb-10 md:mb-20 md:font-semibold md:border-l-4 md:border-amber-200 md:pl-6 rounded-xl'>Hi, I'm <AttentionSeeker className='inline-block font-bold text-2xl md:text-5xl md:text-amber-400'>Arshil Amaan Ansari</AttentionSeeker>, a Full Stack Developer based in Lucknow, India. I've crafted and engineered robust solutions across a spectrum of applications, from dynamic eCommerce platforms to scalable enterprise systems. I'm passionate about delivering end-to-end solutions, ensuring every layer—from pixel-perfect interfaces to seamless backend integration—works in harmony to create intuitive, high-performance user experiences.</p>
                    <div className='text-center md:text-left md:ml-6' >
                    <Button />
                    </div>
                </div>
                <div className='bg-amber-200 h-[10%] lg:h-fit lg:w-1/2 flex justify-center overflow-hidden'>
                    <img data-aos="zoom-in-up" src={myImg} className='w-[50%] md:w-full ml-12' style={{
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                    }} alt="portfolio-image" />
                </div>
            </div>
        </div>

    )
}

export default About;