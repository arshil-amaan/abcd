import Marquee from "react-fast-marquee";
import React, { useEffect, useState, useCallback, useMemo, lazy, Suspense } from 'react';
import allTechList from "../../assets/data/techList.js";

const SkillCard = lazy(() => import('../../assets/UI/Skills/SkillCard'));

const Skills = () => {
    const marqueeStyles = useMemo(() => ({
        WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"
    }), []
    );

    const midIndex = Math.ceil(allTechList.length / 2);
    const techList = allTechList.slice(0, midIndex);
    const techList2 = allTechList.slice(midIndex);

    return (
        <section id='skills-section' className='flex flex-col justify-center items-center bg-amber-200'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto relative -top-3">
                <path
                    className="fill-cyan-400"
                    fillOpacity="1"
                    d="M0,288L26.7,288C53.3,288,107,288,160,288C213.3,288,267,288,320,266.7C373.3,245,427,203,480,202.7C533.3,203,587,245,640,240C693.3,235,747,181,800,181.3C853.3,181,907,235,960,234.7C1013.3,235,1067,181,1120,170.7C1173.3,160,1227,192,1280,213.3C1333.3,235,1387,245,1413,250.7L1440,256L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
                ></path>
            </svg>
            <h2 className='text-3xl md:text-5xl font-bold text-center text-slate-800'>Tech Stack</h2>
            <Suspense fallback={<div>Loading skills...</div>}>
                <Marquee speed={60} direction="" className=" pt-24" pauseOnHover style={marqueeStyles} >
                        {techList.map((tech, key) => <SkillCard key={key} tech={tech.tech} tooltip={tech.tooltip} />)}
                </Marquee>
                <Marquee speed={60} className="pt-20" pauseOnHover style={marqueeStyles}>
                    {techList2.map((tech, key) => <SkillCard key={key} tech={tech.tech} tooltip={tech.tooltip} />)}
                </Marquee>
            </Suspense>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-cyan-400 relative -bottom-3" viewBox="0 0 1440 320"><path fillOpacity="1" d="M0,128L26.7,160C53.3,192,107,256,160,261.3C213.3,267,267,213,320,160C373.3,107,427,53,480,74.7C533.3,96,587,192,640,218.7C693.3,245,747,203,800,186.7C853.3,171,907,181,960,165.3C1013.3,149,1067,107,1120,117.3C1173.3,128,1227,192,1280,218.7C1333.3,245,1387,235,1413,229.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </section>
    );
};

export default Skills;