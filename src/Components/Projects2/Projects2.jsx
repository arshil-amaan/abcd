import Carousel from "./Carousel/Carousel";
import Slider from "./Slider";
import data from "./data";
import './styles.css'

const Projects2 = () => {
    return (
        <div id="projects-section" className="center  border-blue-300">
            <h2 className='text-3xl font-bold text-center mb-12'>Projects</h2>
            {/* <div className="hidden md:block text-center">
                <Slider data={data} activeSlide={2} />
            </div> */}
            {/* <div className="md:hidden"> */}
            <div>
                <Carousel />
            </div>
        </div>
    )
}

export default Projects2