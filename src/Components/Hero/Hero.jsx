import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react'
import { ReactNebula } from "@flodlc/nebula";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {

    const word1 = "Brilliant";
    const word2 = "Solutions";
    
    const getSpan = (word) => {
        return word.split('').map((letter, index) => (
            <span
                className='text-4xl md:text-8xl md:text-stroke-1 text-amber-300 md:text-fill-transparent'
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
                <ReactNebula config={{
                    starsCount: 680,
                    starsColor: "#FFF",
                    starsRotationSpeed: 3,
                    cometFrequence: 100,
                    nebulasIntensity: 10,
                    bgColor: "rgb(8,8,8)",
                    sunScale: 3,
                    planetsScale: 3,
                    solarSystemOrbite: 65,
                    solarSystemSpeedOrbit: 100
                }} />
                <div className='flex flex-col justify-center items-center z-10'>
                    <div className='md:mb-10 font-bold text-xl md:text-6xl'>
                        <div className='flex justify-center'>
                            <Slide triggerOnce={true} className='text-4xl md:text-6xl mb-9'>
                                <p>From&nbsp;</p>
                            </Slide>

                            <Fade triggerOnce={true} delay={1e3} cascade damping={2e-1} className='mb-9 inline '>
                                <span className='text-4xl md:text-7xl font-codic md:text-stroke-1 text-amber-300 md:text-fill-transparent' >ZEROS</span>

                                <span className='text-4xl md:text-6xl'>&nbsp;and&nbsp;</span>

                                <span className='text-4xl md:text-7xl font-codic md:text-stroke-1 text-amber-300 md:text-fill-transparent'>ONES</span>
                            </Fade>
                        </div>
                        <div className='flex'>
                            <Slide triggerOnce={true} className='mb-9 text-3xl md:text-6xl'>
                                <p>To&nbsp;</p>
                            </Slide>
                            <Fade triggerOnce={true} delay={2e3} cascade damping={1e-1} className='mb-9 inline font-extrabold font-beauty'>
                                {spans1}
                            </Fade>&nbsp;
                            <Fade triggerOnce={true} delay={2.9e3} cascade damping={1e-1} className='mb-9 inline  font-beauty'>
                                {spans2}
                            </Fade>
                        </div>
                    </div>

                    <Fade delay={4e3} triggerOnce={true}>
                        <div className="hero-links flex leading-loose">

                            <a
                                href='#about-section'
                                className='text-xl md:text-2xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                            >
                                About
                            </a>
                            <a
                                href='#projects-section'
                                className='text-xl md:text-2xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
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