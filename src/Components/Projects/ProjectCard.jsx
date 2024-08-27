import React from 'react';
import style from './ProjectCard.module.css';
import Button from './Button';
import live from '../../assets/live.gif'

const ProjectCard = ({ projImg, description, title, ghLink, demoLink }) => {
    return (
        <div className={style["cardm"]}>

            <div className={style["card"]} style={{ background: `url(${projImg}) top center / cover no-repeat` }}>
                <div className={`${style["overlay"]} flex items-center justify-center h-[309px] z-[3] rounded-3xl opacity-0`}>
                    <div className="flex w-3/4 justify-between">
                        <Button to="github" goto={ghLink} />
                        <Button to="site" goto={demoLink} />

                    </div>
                </div>
            </div>

            <div className={`${style["card2"]} bg-amber-100`}>
                <div className={style["upper"]}>
                    <h1 className="text-3xl font-bold font-defall">{title}</h1>
                </div>

                <div className={style["lower"]}>
                    <p className='text-base px-5 font-defall'>{description}</p>
                    <div className={style["card3"]}>
                        <img src={live} alt="liveIc" width={"25%"} style={{ marginTop: '-10px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;