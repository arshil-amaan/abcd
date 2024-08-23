import React from 'react';
import style from './ProjectCard.module.css';
import Button from './Button';

const ProjectCard = ({projImg, description}) => {
    return (
        <div className={style["cardm"]}>

            <div className={style["card"]}
                style={{
                    background: `url(${projImg}) top center / cover no-repeat`,
                }}
            >
                <div className={`${style["overlay"]} flex items-center justify-center h-[309px] z-[3] rounded-3xl opacity-0`}>
                    <div className="flex w-3/4 justify-between">
                        <Button to="github"/>
                        <Button to="site"/>
                    </div>
                </div>
            </div>

            <div className={style["card2"]}>
                <div className={style["upper"]}>
                        <h1 className="text-3xl font-bold">Project Name</h1>
                </div>

                <div className={style["lower"]}>
                    <p className='text-sm px-5'>{description}</p>
                    <div className={style["card3"]}>
                        Some Text
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
