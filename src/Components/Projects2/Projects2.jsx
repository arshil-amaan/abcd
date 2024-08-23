import Slider from "./Slider";
import data from "./data";
import './styles.css'

const Projects2 = () => {
    return (
        <div className="center">
            <Slider data={data} activeSlide={0} />
        </div>
    )
}

export default Projects2