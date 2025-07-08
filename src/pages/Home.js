import { FaReact, FaPython, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

function Home() {
    return (
        <div className="home-container">
            <img src="/eric.jpeg" alt="Erick Wetiba Were" className="profile-img" />
            <h1>Erick Wetiba Were</h1>
            <p className="subtitle">
                <FaReact color="#61DBFB" /> ReactJS | <FaPython color="#306998" /> Django | Full-Stack Dev
            </p>

            <p className="intro">
                I’m a Senior Software Engineer with 7+ years of experience building scalable web apps and APIs.
                I lead software teams, mentor developers, and build enterprise-grade solutions.
            </p>

            <div className="home-buttons">
                <a href="/erick_cv.pdf" download className="btn">
                    <FaDownload /> Download CV
                </a>
                <a href="https://linkedin.com/in/erickwere" target="_blank" rel="noreferrer" className="btn outline">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/erickwere" target="_blank" rel="noreferrer" className="btn outline">
                    <FaGithub /> GitHub
                </a>
            </div>
        </div>
    );
}

export default Home;
