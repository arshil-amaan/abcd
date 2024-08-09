import TextSnippet from '@mui/icons-material/TextSnippet';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Email from '@mui/icons-material/Email';
import React, { useEffect } from 'react'
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Full Stack', 'Java', 'MERN'];

const Hero = () => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div className='h-screen flex justify-center flex-col items-center' id='hero-section'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold'>Arshil Amaan Ansari</h1>
                <div className='flex'>
                    <p>I'm a &nbsp;</p>
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                    <p>&nbsp;Developer</p>
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

            <div className='chevron' style={{position:'absolute', bottom:'3%'}}><ExpandMore /></div>
        </div>
    )
}

export default Hero;