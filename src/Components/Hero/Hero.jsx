import ExpandMore from '@mui/icons-material/ExpandMore';
import React from 'react'
import { ReactNebula } from "@flodlc/nebula";

const Hero = () => {

    return (
        <>
            <div className='h-screen flex justify-center flex-col items-center' id='hero-section'>
                <ReactNebula />
                <div className='flex flex-col justify-center items-center z-10'>
                    <h1 className='text-7xl font-bold'>Arshil Amaan Ansari</h1>
                    <div className='flex text-2xl'>
                        <p className='leading-loose'>I'm a Developer</p>
                    </div>
                    <div className="hero-links flex leading-loose">
                        <a
                        href='#about-section'
                            className='text-xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                        >
                            About
                        </a>
                        <a
                        href='#projects-section'
                            className='text-xl font-semibold mx-5 pb-1 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500 ease-out'
                        >
                            Projects
                        </a>
                    </div>
                </div>

                <div className='chevron' style={{ position: 'absolute', bottom: '3%' }}><ExpandMore /></div>
                <ReactNebula />
            </div>
        </>
    )
}

export default Hero;