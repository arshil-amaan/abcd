import React, { Suspense, useMemo } from 'react'
import Marquee from 'react-fast-marquee'
import allTechList from "../../data/techList.js";
import SkillCard from './SkillCard.jsx';

const DesktopSkills = () => {
    const midIndex = Math.ceil(allTechList.length / 2);
    const techList = allTechList.slice(0, midIndex);
    const techList2 = allTechList.slice(midIndex);
    return (
        <div className='w-full'>
                    <SkillCard list={techList}/>
                    <SkillCard list={techList2} direction="left"/>
            {/* <Suspense fallback={<div>Loading skills...</div>}>
                <Marquee speed={60} direction="" className=" pt-24" pauseOnHover style={marqueeStyles} >
                    {techList.map((item,key)=>{
                        return (
<div>{item.tech} hello</div>
                        )
                    })}
                </Marquee>
            </Suspense> */}
            {/* <Suspense fallback={<div>Loading skills...</div>}>
                <Marquee speed={60} className="pt-20" pauseOnHover style={marqueeStyles}>
                    {techList2.map((tech, key) => <SkillCard key={key} tech={tech.tech} Icon={tech.Icon} tooltip={tech.tooltip} />)}
                </Marquee>
            </Suspense> */}
        </div>
    )
}

export default DesktopSkills