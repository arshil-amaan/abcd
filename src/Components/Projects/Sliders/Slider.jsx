import React, { useState } from "react";
import ProjectCard from "../UI/ProjectCard";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import styles from '../styles.module.css'


export default (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const next = () => activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

    const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7
            };
    };

    return (
        <>
            {/* carousel */}
            <div className={`${styles["slideC"]}flex flex-col w-screen justify-center items-center text-center h-[379px] mx-0 my-auto perspective-1000 transform-style-preserve-3d overflow-x-auto`}>
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className={`${styles['slide']} flex items-center justify-center transition-all duration-500 absolute`}
                            style={{
                                background: item.bgColor,
                                boxShadow: `0 5px 20px ${item.bgColor}30`,
                                ...getStyles(i)
                            }}
                        >
                            <SliderContent {...item} />
                        </div>
                        <div
                            className={`absolute w-full h-16 -bottom-14 rounded-3xl rounded-bl-none rounded-br-none transition-all duration-500`}
                            style={{
                                zIndex:-1,
                                background: `linear-gradient(to bottom, ${item.bgColor}20, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            <div className="btns flex justify-between gap-8 pt-16">
                <div
                className="cursor-pointer"
                    onClick={prev}
                ><ArrowBackIosRoundedIcon style={{ fontSize: '40px' }} /></div>
                <div
                className="cursor-pointer"
                    onClick={next}
                ><ArrowForwardIosRoundedIcon style={{ fontSize: '40px' }} /></div>
            </div>
        </>
    );
};

const SliderContent = ({ projImg, description, title, ghLink, demoLink }) => {
    return (
        <div>
            <ProjectCard projImg={projImg} description={description} title={title} ghLink={ghLink} demoLink={demoLink} />
        </div>
    );
};
