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


const Projects = () => {
    return (
        <div style={{ margin: "150px" }} className='flex flex-row' id='projects-section'>
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