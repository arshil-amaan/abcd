import { useEffect, useState } from 'react';
import SliderM from './Sliders/SliderM'
import Slider from "./Sliders/Slider";
import data from "./data";

const Projects2 = () => {
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMd(a => window.innerWidth >= 768); // md: corresponds to 768px
        };
        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <div id="projects-section" className="flex justify-center items-center flex-col w-full py-10">
            <h2 className='text-3xl md:text-5xl font-bold text-center mb-12'>Projects</h2>

            {isMd ? <Slider data={data} activeSlide={2} /> : <SliderM data={data} activeSlide={2} />}


        </div>
    )
}

export default Projects2