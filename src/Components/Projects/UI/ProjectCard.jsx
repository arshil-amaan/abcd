import React from 'react';
import Button from './Button';
import live from '../../../assets/live.gif';

const ProjectCard = ({ projImg, description, title, ghLink, demoLink }) => {
    return (
        <div id='project-card' className="relative w-full h-full flex items-center justify-center group rounded-3xl p-4 transition-all duration-500">
            <div id='project-card-front' className={`relative rounded-3xl text-black z-2 w-full h-full transition-transform duration-400 ease-in-out shadow-[0px_0px_20px_#252525]`}
                style={{ background: `url(${projImg}) top center / cover no-repeat` }}
            >
                <div className="flex gap-40 items-center justify-center w-full h-full z-[3] rounded-3xl opacity-0 group-hover:opacity-100 group-hover:bg-translucent transition-opacity duration-400">
                    <Button to="github" goto={ghLink} />
                    <Button to="site" goto={demoLink} />
                </div>
            </div>

            <div id='project-card-back' className={`absolute flex flex-col w-[calc(100%-2rem)] h-0 m-4 rounded-3xl z-[-1] top-[20px] bg-amber-100 text-slate-900 pt-2 group-hover:transition-all group-hover:duration-500 ease-in-out group-hover:top-[-50px] group-hover:h-[542px] overflow-hidden`}>
                <h1 className="text-3xl font-bold font-defall text-center">{title}</h1>
                <p className="text-base px-5 absolute font-defall top-12 transition-all duration-300 group-hover:top-[23rem] text-justify">{description}</p>
                <div className="h-8 absolute w-full bottom-0 flex justify-center items-center rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-[#32cd32] via-amber-100 to-[#32cd32]">
                    <img src={live} alt="liveIc" className="w-1/5" />
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
