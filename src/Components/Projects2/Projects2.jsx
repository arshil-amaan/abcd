import Slider from "./Slider";
import data from "./data";
import './styles.css'

const Projects2 = () => {
    return (
        <div id="projects-section" className="center">
            <Slider data={data} activeSlide={2} />
        </div>
    )
}

export default Projects2