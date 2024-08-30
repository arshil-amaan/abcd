import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import myImgSm from '../../assets/images/smImages/about-sm.webp';
import myImgMd from '../../assets/images/mdImages/about-md.webp';

const AttentionSeeker = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.AttentionSeeker })));
const Bounce = lazy(() => import('react-awesome-reveal').then(module => ({ default: module.Bounce })));
const Button = lazy(() => import('../../assets/UI/About/Button'));


const About = () => {
    const introText = useMemo(() => ("ons that not only work but wow. Whether it’s a Firebase-powered food app that knows what you crave before you do or an event discovery platform that puts the spotlight on your next big night out, I bring a mix of creativity, technical expertise, and a sprinkle of humor to every project. My mission? To transform complex problems into intuitive, user-friendly solutions—and maybe have a bit of fun along the way. After all, who says coding can’t be a blast? When I'm not immersed in code, I'm busy mentoring future tech wizards, leading workshops, or perhaps trying to beat my own record on LeetCode. Ready to join me on this digital journey? Let’s create something extraordinary together!"), [])
    const [isMd, setIsMd] = useState(false);

    const [isExpanded, setIsExpanded] = useState(false);
    const handleReadMore = () => {
        setIsExpanded(prevState => !prevState);
    }
    const handleResize = useCallback(debounce(() => {
        setIsMd(window.innerWidth >= 768);
    }, 200), []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <div id='about-section' className='about-wrapper bg-cyan-400 flex flex-col-reverse md:flex-row text-slate-800 text-lg h-full'>
            <div className='md:w-2/3 py-12 px-4 md:p-12 pt-20 md:pt-12 flex flex-col relative justify-center'>
                {!isMd ?
                    <div className='w-screen absolute -top-1 left-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className='fill-amber-200' fillOpacity="1" d="M0,128L26.7,112C53.3,96,107,64,160,85.3C213.3,107,267,181,320,186.7C373.3,192,427,128,480,85.3C533.3,43,587,21,640,26.7C693.3,32,747,64,800,112C853.3,160,907,224,960,218.7C1013.3,213,1067,139,1120,138.7C1173.3,139,1227,213,1280,229.3C1333.3,245,1387,203,1413,181.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>

                    </div>
                    :
                    null}
                <h2 className='text-5xl md:text-8xl font-semibold md:ml-6 font-beauty'>
                    Welcome
                    <Suspense fallback={<span className="animate-pulse">...</span>}>
                        <Bounce style={{ animationIterationCount: 'infinite' }} className='inline-block'>.</Bounce>
                        <Bounce style={{ animationIterationCount: 'infinite', animationDelay: '166ms' }} className='inline-block'>.</Bounce>
                        <Bounce style={{ animationIterationCount: 'infinite', animationDelay: '333ms' }} className='inline-block'>.</Bounce>
                    </Suspense>
                </h2>

                <div className='text-justify md:text-left md:leading-9 text-lg md:text-xl mt-10 mb-10 md:mb-20 md:font-semibold md:border-l-4 md:border-amber-400 md:pl-6 rounded-xl'>
                    I'm <Suspense fallback={<span className="animate-pulse">Arshil Amaan Ansari</span>}>
                        <AttentionSeeker className='border-b-4 drop-shadow-2xl border-b-slate-800 md:border-b-amber-400 rounded-lg inline-block font-bold text-2xl md:text-5xl md:text-amber-400 font-beauty'>Arshil Amaan Ansari</AttentionSeeker>
                    </Suspense>, your friendly neighborhood Full Stack Developer based in the bustling city of Lucknow, India. When I'm not busy unraveling the mysteries of Data Structures or optimizing code to shave off milliseconds, you'll find me crafting seamless digital experiences that blend sleek front-end designs with rock-solid back-end wizardry. From turning lines of JavaScript into interactive delights to engineering systems with SQL, React.js, and Docker that could make a robot blush, I'm all about creating soluti

                    {introText.substring(0, isExpanded ? introText.length : 0)}

                    <span onClick={handleReadMore} className='drop-shadow-2xl cursor-pointer underline'>
                        {isExpanded ? ' Read Less' : '...Read More'}
                    </span>
                </div>
                <div className='justify-center md:justify-start md:ml-6 relative flex'>
                    <Suspense fallback={<button>Hire Me</button>}>
                        <Button />
                    </Suspense>
                </div>

            </div>
            <div className='md:w-1/3 flex justify-center bg-amber-200 md:bg-cyan-400 relative items-center overflow-hidden'>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-clockwise-1 absolute' style={{ borderRadius: '62% 41% 30% 67% / 56% 50% 33% 37% ' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-counterclockwise-1 absolute' style={{ borderRadius: '26% 74% 70% 30% / 47% 45% 55% 53%' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-clockwise-2 absolute' style={{ borderRadius: '32% 68% 29% 71% / 27% 42% 58% 73%' }}></div>
                <div className='w-10/12 md:w-10/12 h-1/2 bg-cyan-400 md:bg-amber-200 animate-spin-counterclockwise-2 absolute' style={{ borderRadius: '59% 41% 49% 51% / 53% 77% 23% 47%' }}></div>
                <Suspense fallback={<div>Arshil Amaan Ansari</div>}>
                    <picture>
                        <source
                            media="(max-width: 767px)"
                            srcSet={myImgSm}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={myImgMd}
                        />
                        <img
                            data-aos="slide-up"
                            data-aos-anchor-placement="top-bottom"
                            className="object-contain h-full"
                            loading="lazy"
                            style={{
                                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                            }}
                            alt="portfolio-image"
                        />
                    </picture>
                </Suspense>
            </div>
        </div>
    );
}

export default About;
