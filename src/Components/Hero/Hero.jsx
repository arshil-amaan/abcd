import TextSnippet from '@mui/icons-material/TextSnippet';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Email from '@mui/icons-material/Email';
import React from 'react'
import { ReactNebula } from "@flodlc/nebula";

import '../../App.css'

const TEXTS = ['Full Stack', 'Java', 'MERN'];

const Hero = () => {

    return (
        <>
            <div className='h-screen flex justify-center flex-col items-center' id='hero-section'>
                <ReactNebula config={{
                    "starsCount": 0,
                    "starsColor": "#f00",
                    "starsRotationSpeed": 8.8,
                    "cometFrequence": 28,
                    "nebulasIntensity": 10,
                    "bgColor": "rgb(8,8,8)",
                    "sunScale": 2.5,
                    "planetsScale": 2.7,
                    "solarSystemOrbite": 82,
                    "solarSystemSpeedOrbit": 70
                }} />
                <div className='flex flex-col justify-center items-center z-10'>
                    <h1 className='text-7xl font-bold'>Arshil Amaan Ansari</h1>
                    <div className='flex text-2xl'>
                        <p>I'm a Developer</p>
                    </div>
                    <div className="hero-icons">
                        <TextSnippet />
                        <GitHub />
                        <LinkedIn />
                        <Email />
                    </div>
                    <div className="hero-links flex">
                        <p>About</p>
                        <p>Projects</p>
                    </div>
                </div>

                <div className='chevron' style={{ position: 'absolute', bottom: '3%' }}><ExpandMore /></div>
                <ReactNebula />
            </div>
        </>
    )
}

export default Hero;