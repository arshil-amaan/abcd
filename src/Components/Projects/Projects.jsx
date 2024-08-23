import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard';
import proj1 from '../../assets/projects/Events-router.webp';
import proj2 from '../../assets/projects/Hunger-Menu.webp';
import proj3 from '../../assets/projects/Expense-Tracker.webp';
import proj4 from '../../assets/projects/My-Portfolio.webp';
import proj5 from '../../assets/projects/Tucasa.webp';
import proj6 from '../../assets/projects/Business-Website.webp';
import proj7 from '../../assets/projects/News-Blog.webp';
import proj8 from '../../assets/projects/weather.webp';
import proj9 from '../../assets/projects/College-Website.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/';
import '/node_modules/swiper/swiper.min.css'
import '/node_modules/swiper/modules/pagination.min.css'
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';
import { A11y } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';


const Projects = () => {
    // const swiper = new Swiper(...);
    return (
        <div style={{ margin: "150px" }} className='flex flex-row' id='projects-section'>

            {/* <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={50}
                 slidesPerView={3}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><ProjectCard projImg={proj1} /></SwiperSlide>
                <SwiperSlide><ProjectCard projImg={proj2} /></SwiperSlide>
                <SwiperSlide><ProjectCard projImg={proj3} /></SwiperSlide>
                <SwiperSlide><ProjectCard projImg={proj4} /></SwiperSlide>
                <SwiperSlide><ProjectCard projImg={proj5} /></SwiperSlide>
                <SwiperSlide><ProjectCard projImg={proj6} /></SwiperSlide>
            </Swiper> */}

            <ProjectCard projImg={proj1} />
            <ProjectCard projImg={proj2} />
            <ProjectCard projImg={proj3} />
            <ProjectCard projImg={proj4} />
            <ProjectCard projImg={proj5} />
            <ProjectCard projImg={proj6} />
            <ProjectCard projImg={proj7} />
            <ProjectCard projImg={proj8} />
            <ProjectCard projImg={proj9} />
        </div>
    )
}

export default Projects;