import Slider from "./Slider";
import data from "./data";
import './styles.css'

const Projects2 = () => {
    return (
        <div id="projects-section" className="center">
            <h2 className='text-3xl font-bold text-center mb-12'>Projects</h2>
            <Slider data={data} activeSlide={2} />
        </div>
    )
}

export default Projects2