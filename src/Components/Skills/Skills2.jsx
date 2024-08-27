import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from 'react'
import SkillCard from "./skillCard";

const techList = [
    { tech: "html5", tooltip: "HTML5 structures and presents web content." },
    { tech: "css3", tooltip: "CSS3 styles and layouts web pages." },
    { tech: "javascript", tooltip: "JavaScript adds interactivity to web pages." },
    { tech: "react", tooltip: "React builds user interfaces for web apps." },
    { tech: "nextjs", tooltip: "Next.js is a React framework for SSR and SSG." },
    { tech: "nodejs", tooltip: "Node.js runs JavaScript on the server." },
    { tech: "nodemon", tooltip: "Nodemon restarts Node.js apps on changes." },
    { tech: "express", tooltip: "Express is a Node.js web application framework." },
    { tech: "python", tooltip: "Python is a versatile and readable programming language." },
    { tech: "java", tooltip: "Java is a robust, platform-independent programming language." },
    { tech: "typescript", tooltip: "TypeScript is JavaScript with static types." },
    { tech: "git", tooltip: "Git tracks changes in source code." },
    { tech: "mongodb", tooltip: "MongoDB is a NoSQL document-oriented database." },
    { tech: "mongoose", tooltip: "Mongoose is an ODM for MongoDB in Node.js." },
    { tech: "mysql", tooltip: "MySQL is an open-source relational database." },
    { tech: "bootstrap", tooltip: "Bootstrap is a responsive front-end framework." },
    { tech: "redux", tooltip: "Redux manages state in JavaScript apps." },
    { tech: "bash", tooltip: "Bash is a Unix shell for command-line scripting." },
    { tech: "linux", tooltip: "Linux is an open-source operating system kernel." }
];

const techList2 = [
    { tech: "vscode", tooltip: "Visual Studio Code is a versatile code editor." },
    { tech: "firebase", tooltip: "Firebase offers real-time databases and backend services." },
    { tech: "materialui", tooltip: "Material-UI provides React components with Material Design." },
    { tech: "tailwindcss", tooltip: "Tailwind CSS is a utility-first CSS framework." },
    { tech: "npm", tooltip: "npm manages JavaScript packages and dependencies." },
    { tech: "docker", tooltip: "Docker enables containerized applications." },
    { tech: "netlify", tooltip: "Netlify automates web project deployment and hosting." },
    { tech: "postman", tooltip: "Postman tests and interacts with APIs." },
    { tech: "babel", tooltip: "Babel compiles modern JavaScript to compatible versions." },
    { tech: "axios", tooltip: "Axios is a promise-based HTTP client for JavaScript." },
    { tech: "jest", tooltip: "Jest is a JavaScript testing framework." },
    { tech: "reactrouter", tooltip: "React Router handles routing in React apps." },
    { tech: "vercel", tooltip: "Vercel optimizes frontend frameworks and static sites." },
    { tech: "canva", tooltip: "Canva is a graphic design tool for creating visuals." },
    { tech: "github", tooltip: "GitHub is a platform for version control with Git." },
    { tech: "githubcodespaces", tooltip: "GitHub Codespaces provides a cloud-based development environment." },
    { tech: "codepen", tooltip: "CodePen showcases HTML, CSS, and JavaScript code snippets." },
    { tech: "vitejs", tooltip: "Vite is a fast build tool for modern web projects." },
    { tech: "c", tooltip: "C is a powerful, low-level programming language." },
    { tech: "cplusplus", tooltip: "C++ extends C with object-oriented features." }
];

const SkillsNew = () => {
    const [isMd, setIsMd] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMd(window.innerWidth >= 768); // md: corresponds to 768px
        };
        handleResize(); // Initialize on mount
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <section id='skills-section' className='flex flex-col justify-center items-center p-12'>
            <h2 className='text-3xl font-bold text-center '>Tech Stack</h2>
            <Marquee speed={60} direction="" className=" pt-24" pauseOnHover style={isMd ? {
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 98%)",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 98%)"
            } : {
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"
            }}>
                {techList.map((tech, key) => <SkillCard key={key} tech={tech.tech} tooltip={tech.tooltip} />)}
            </Marquee>
            <Marquee speed={60} className="pt-20" pauseOnHover style={isMd ? {
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 98%)",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 98%)"
            } : {
                WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)",
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)"
            }}>
                {techList2.map((tech, key) => <SkillCard key={key} tech={tech.tech} tooltip={tech.tooltip} />)}
            </Marquee>
        </section>
    )
}

export default SkillsNew;