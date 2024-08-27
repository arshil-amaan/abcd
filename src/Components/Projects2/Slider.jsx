import React, { useState } from "react";
import ProjectCard from "../Projects/ProjectCard";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

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
            <div className="slideC flex flex-col">
                {props.data.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <div
                            className="slide w-[590px]"
                            style={{
                                background: item.bgColor,
                                boxShadow: `0 5px 20px ${item.bgColor}30`,
                                ...getStyles(i)
                            }}
                        >
                            <SliderContent {...item} />
                        </div>
                        <div
                            className="reflection"
                            style={{
                                background: `linear-gradient(to bottom, ${item.bgColor}20, transparent)`,
                                ...getStyles(i)
                            }}
                        />
                    </React.Fragment>
                ))}
            </div>
            {/* carousel */}

            <div className="btns flex justify-center items-center">
                <div
                    className="btn"
                    onClick={prev}
                    color="#fff"
                    size="2x"
                ><ArrowBackIosRoundedIcon style={{ fontSize: '40px' }} /></div>
                <div
                    className="btn"
                    onClick={next}
                    color="#fff"
                    size="2x"
                ><ArrowForwardIosRoundedIcon style={{ fontSize: '40px' }} /></div>
            </div>
        </>
    );
};

const SliderContent = ({ projImg, description, title, ghLink, demoLink }) => {
    return (
        <div className="sliderContent">
            <ProjectCard projImg={projImg} description={description} title={title} ghLink={ghLink} demoLink={demoLink} />
        </div>
    );
};
