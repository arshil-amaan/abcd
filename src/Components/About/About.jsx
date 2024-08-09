import myImg from '../../assets/portfolio-pic.png';
import React from 'react'

const About = () => {
    return (
        <div id='about-section'>
            <div className='about-wrapper flex'>
                <div className='bg-cyan-400 w-full p-12'>
                    <h2 className='text-3xl font-bold text-center mb-12'>About Me</h2>
                    <p className='leading-8'>Hey there! 🌟 I'm Arshil Amaan Ansari, your go-to web wizard hailing from Lucknow, India. 🇮🇳 Imagine a blend of curiosity 🧐, creativity 🎨, and caffeine-fueled coding sessions ☕️—that's my recipe for crafting digital magic! ✨

                        I've completed my Master's in Computer Application at Kamla Nehru Institute of Technology, I'm on a mission to conquer the tech universe 🌌. From Data Structures and Algorithms to Software Engineering and Artificial Intelligence, I'm soaking up knowledge faster than my laptop can boot up! 💻

                        Armed with a Bachelor's in Computer Science and Mathematics 🎓, I thrive on turning ideas into pixel-perfect realities using React.js, HTML5, CSS, and JavaScript. 💡 My recent brainchildren include the Events Router and Hunger Menu apps—slick interfaces paired with backend prowess! 🚀

                        When I'm not crafting code symphonies, you'll find me orchestrating virtual recruitment drives and empowering students as a Training and Placement Representative. 🌟 I've unlocked over 100 job opportunities and fueled 300+ students' career dreams! 💼

                        My hunger for learning is insatiable—I've bagged certifications in Agile Methodology and Docker Essentials, alongside conquering 500+ coding challenges on GeeksForGeeks and LeetCode. 🏆

                        Outside the binary realm, I'm all about jam sessions 🎸, spreading good vibes, and mentoring fellow tech explorers. 🌈 Let's team up and bring your digital dreams to life! 🚀💻

                        Ready to dive into a world of innovation and collaboration? Let's connect and make some tech magic happen! 🌐✨</p>
                </div>
                <div className='bg-amber-200 h-screen w-full flex justify-center'>
                    <img src={myImg} className='h-full' style={{
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                        maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                    }} alt="portfolio-image" />
                </div>
            </div>
        </div>

    )
}

export default About;