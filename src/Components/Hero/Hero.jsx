import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react'
import { ReactNebula } from "@flodlc/nebula";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {

    const word1 = "Brilliant";
    const word2 = "Solutions";

    // Define the getSpan function to return the array of spans
    const getSpan = (word) => {
        return word.split('').map((letter, index) => (
            <span
                className='text-4xl md:text-8xl'
                style={{
                    WebkitTextStroke: '1px #fde68a',
                    WebkitTextFillColor: 'transparent'
                }}
                key={index}
            >
                {letter}
            </span>
        ));
    };

    const spans1 = getSpan(word1);
    const spans2 = getSpan(word2);

    return (
        <>
            <div className='h-dvh flex justify-center flex-col items-center' id='hero-section'>
                <ReactNebula />
                <div className='flex flex-col justify-center items-center z-10'>
                    <div className='text-xl md:text-6xl md:mb-10'>
                        <div className='flex'>
                            <Slide triggerOnce={true} className='md:text-6xl mb-9 font-bold'>
                                <p>From&nbsp;</p>
                            </Slide>

                            <Fade triggerOnce={true} delay={1e3} cascade damping={2e-1} className=' mb-9 inline font-bold'>
                                <span className='text-4xl md:text-8xl' style={{
                                    WebkitTextStroke: '1px #fde68a', WebkitTextFillColor: 'transparent'
                                }}>Zeroes</span>

                                <span>&nbsp;and&nbsp;</span>

                                <span className='text-4xl md:text-8xl' style={{
                                    WebkitTextStroke: '1px #fde68a', WebkitTextFillColor: 'transparent'
                                }}>Ones</span>
                            </Fade>
                        </div>
                        <div className='flex'>
                            <Slide triggerOnce={true} className=' mb-9 font-bold'>
                                <p>To&nbsp;</p>
                            </Slide>
                            <Fade triggerOnce={true} delay={2e3} cascade damping={1e-1} className=' mb-9 inline font-bold'>
                                {spans1}
                            </Fade>&nbsp;
                            <Fade triggerOnce={true} delay={2.9e3} cascade damping={1e-1} className=' mb-9 inline font-bold'>
                                {spans2}
                            </Fade>
                        </div>
                    </div>
                    <Fade delay={4e3} triggerOnce={true}>
                        <div className="hero-links flex leading-loose">

                            <a
                                href='#about-section'
                                className='md:text-xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                About
                            </a>
                            <a
                                href='#projects-section'
                                className='md:text-xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                Projects
                            </a>
                        </div>
                    </Fade>
                </div>
                <Fade delay={4e3} triggerOnce={true} className='flex justify-center'>
                    <a href='#about-section' className='absolute bottom-3 chevron z-10 animate-bounce'><ExpandMore fontSize='large' /></a>
                </Fade>
            </div>
        </>
    )
}

export default Hero;